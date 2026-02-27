import Input from "../components/ui/Input";
import { useForm } from "../hooks/useForm";
import type { LoginFormValues } from "../types/form.types";
import { validatePassword } from "../utils/validators";
import toast from "react-hot-toast";

const Login = () => {
    const { values, errors, handleChange, handleSubmit } =
        useForm<LoginFormValues>(
            { password: "", email: "" },
            validatePassword
        );

    const onSubmit = (data: LoginFormValues) => {
        console.log("Login success:", data);

        toast.success("Login successful 🎉");
    };

    return (
        <section className="flex justify-center items-center w-full h-full">
            <div className="flex h-screenn flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="mt-10 sm:mx-auto sm:w-full ">
                    <form method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
                            <div className="mt-2">
                                <Input
                                    id="email"
                                    value={values.email}
                                    label="email" type="email"
                                    name="email" required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />

                            {errors.length > 0 && (
                                <ul className="mt-2 text-red-500 text-sm space-y-1">
                                    {errors.map((err, i) => (
                                        <li key={i}>{err}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        Not a member?
                        <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;

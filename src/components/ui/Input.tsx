import { useState, type InputHTMLAttributes } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, type, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-2 flex flex-col">
      <label className="block text-sm font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className="w-full border rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
          >
            {showPassword ? <FaEyeLowVision /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;

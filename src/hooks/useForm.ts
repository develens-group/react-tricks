import { useState, type ChangeEvent, type FormEvent } from "react";

export const useForm = <T extends { password: string }>(
  initialValues: T,
  validate: (value: string) => string[]
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);

    // realtime validation after first submit
    if (isSubmitted) {
      setErrors(validate(newValues.password));
    }
  };

  const handleSubmit =
    (callback: (values: T) => void) =>
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsSubmitted(true);

      const validationErrors = validate(values.password);
      setErrors(validationErrors);

      if (validationErrors.length === 0) {
        callback(values);
      }
    };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

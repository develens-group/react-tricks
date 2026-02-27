import { PASSWORD_RULES } from "../constants/regex";

export const validatePassword = (password: string): string[] => {
  const errors: string[] = [];

  if (!PASSWORD_RULES.length.test(password)) {
    errors.push("Password must be between 6 and 10 characters");
  }

  if (!PASSWORD_RULES.uppercase.test(password)) {
    errors.push("At least one uppercase letter is required");
  }

  if (!PASSWORD_RULES.symbol.test(password)) {
    errors.push("At least one special character is required");
  }

  return errors;
};

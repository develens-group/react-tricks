export interface LoginFormValues {
  password: string;
  email: string;
}

export type VAlidateFunction<T> = (value: T) => string[];

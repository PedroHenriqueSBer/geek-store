declare module "props" {
  interface IContextProps {
    children: import("react").ReactNode;
  }

  interface IInputProps {
    label?: string
  }

  export type ITextFieldProps = Omit<import("@mui/material").TextFieldProps, "variant"> & {
    variant?: Variant;
  };
}

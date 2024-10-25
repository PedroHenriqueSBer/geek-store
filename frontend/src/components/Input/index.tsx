import { TextField } from "@mui/material";
import { IInputProps, ITextFieldProps } from "props";
import { useTheme } from "styled-components";

export const Input = (props: IInputProps) => {
  const { label } = props;
  const theme = useTheme();
  console.log(theme.colors.primary300);

  const textFieldProps: ITextFieldProps = {
    color: "primary",
    size: "small",
    label,
  };

  

  return <TextField {...textFieldProps} />;
};

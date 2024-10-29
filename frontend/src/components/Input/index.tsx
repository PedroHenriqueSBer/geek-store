import {
  IInput,
  IInputFieldsetProps,
  IInputStyleProps,
  ITextProps,
} from "props";
import { Container, Fieldset, Legend, StyledInput } from "./style";
import { Text } from "..";

export const Input = ({
  rounded,
  width,
  legend,
  variant,
  placeholder,
  error,
  helperText,
  isFullWidth,
  endProps: EndProps,
  startProps: StartProps,
  ...props
}: IInput) => {
  const fieldsetProps: IInputFieldsetProps = {
    rounded,
    variant: variant ?? "outline",
    error: !!error,
  };

  const styledInputProps: IInputStyleProps = {
    ...props,
    width,
    variant: variant ?? "outline",
    placeholder: ["outline", undefined].includes(variant)
      ? placeholder
      : legend ?? placeholder,
  };

  const helperTextProps: ITextProps = {
    color: "error",
    size: "10/12",
    weight: "sxx",
    children: helperText,
  };

  return (
    <Container isFullWidth={!!isFullWidth}>
      <Fieldset {...fieldsetProps}>
        {variant !== "standart" && legend && <Legend>{legend}</Legend>}
        {StartProps && <StartProps />}
        <StyledInput {...styledInputProps} />
        {EndProps && <EndProps />}
      </Fieldset>
      {helperText && <Text {...helperTextProps} />}
    </Container>
  );
};

import { IButton } from "props";
import { StyledButton } from "./style";
export const Button = ({ variant, color, colorDark, ...props }: IButton) => {
  const buttonProps = {
    variant: variant ?? 'container',
    color: color ?? 'primary300',
    colorDark: colorDark ?? 'primary500',
    ...props,
  };
  return <StyledButton {...buttonProps} />;
};

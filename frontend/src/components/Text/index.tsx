import { ITextProps } from "props";
import { StyledText } from "./style";

export const Text = ({ children, ...props }: ITextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};

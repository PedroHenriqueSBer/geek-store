import { IIconButton } from "props";
import { StyledIconButton } from "./style";
export const IconButton = ({ ...props }: IIconButton) => {
  return <StyledIconButton {...props} />;
};

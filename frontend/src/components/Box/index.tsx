import { IBox } from "props"
import { StyledBox } from "./style"

export const Box = ({
  ...props
}: IBox) => {
  return <StyledBox {...props} />
}
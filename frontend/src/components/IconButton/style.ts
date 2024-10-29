import { IIconButton } from "props";
import styled from "styled-components";

export const StyledIconButton = styled.button<IIconButton>`
  color: ${({ theme, color }) => theme.colors[color ?? "primary300"]};
  padding: 3px;
  width: fit-content;
  height: fit-content;
  border-radius: 100px;
  &:hover {
    backdrop-filter: brightness(94%);
  }
`;

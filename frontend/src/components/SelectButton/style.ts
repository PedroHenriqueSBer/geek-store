import { ISelectButton } from "props";
import styled from "styled-components";

export const StyleSelectedButton = styled.button<ISelectButton>`
  width: ${({ theme, width }) => theme.size[width ?? "0"]};
  height: ${({ theme, height }) => theme.size[height ?? "0"]};
  border-radius: ${({ theme, rounded }) => theme.size[rounded ?? "2"]};
  border: ${({ value, actualValue, theme }) =>
    value === actualValue ? "1px solid " + theme.colors.primary300 : "none"};
  padding: ${({ theme, padding }) => theme.size[padding ?? "0"]};
  background: ${({ theme, color }) => theme.colors[color ?? "background200"]};
  color: ${({theme}) => theme.colors.primary300};
`;

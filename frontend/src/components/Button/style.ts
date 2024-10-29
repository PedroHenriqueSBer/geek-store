import { IButton } from "props";
import styled from "styled-components";

export const StyledButton = styled.button<IButton>`
  width: ${({ theme, width }) => (width ? theme.size[width] : "fit-content")};
  height: fit-content;
  padding: 0.8rem;
  border-radius: ${({ theme }) => theme.size["3"]};
  background: ${({ theme, variant, color }) =>
    variant === "container" ? theme.colors[color ?? "primary300"] : "auto"};
  color: ${({ theme, variant }) =>
    variant === "container"
      ? theme.colors.background100
      : theme.colors.primary300};
  box-shadow: 0 0 3px ${({ theme }) => theme.colors.shadow};
  &:hover {
    backdrop-filter: brightness(96%);
    background: ${({ theme, variant, colorDark }) =>
      variant === "container"
        ? theme.colors[colorDark ?? "primary500"]
        : "auto"};
  }
`;

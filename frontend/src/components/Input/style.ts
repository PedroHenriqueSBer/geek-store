import { IInputFieldsetProps, IInputStyleProps } from "props";
import styled from "styled-components";

export const Container = styled.div<{ isFullWidth: boolean }>`
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
`;

export const Fieldset = styled.fieldset<IInputFieldsetProps>`
  display: flex;
  gap: ${({ theme }) => theme.size[2]};
  border: ${({ theme, variant, error }) =>
    variant === "outline"
      ? error
        ? `1px solid ${theme.colors.error}`
        : `1px solid ${theme.colors.primary300}`
      : "none"};
  border-radius: ${({ theme, rounded, variant }) =>
    variant === "outline" ? theme.size[rounded ?? "3"] : "0"};
  border-bottom: ${({ theme, variant, error }) =>
    variant === "standart"
      ? error
        ? `1px solid ${theme.colors.error}`
        : `1px solid ${theme.colors.primary300}`
      : "auto"};
`;

export const Legend = styled.legend`
  padding: 0 0.4rem;
  color: ${({ theme }) => theme.colors.primary300};
`;

export const StyledInput = styled.input<IInputStyleProps>`
  width: ${({ theme, width }) => theme.size[width ?? "full"]};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary300};
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary500Op};
  }
`;

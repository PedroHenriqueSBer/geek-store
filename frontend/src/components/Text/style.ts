import { ITextProps } from "props";
import styled from "styled-components";

export const StyledText = styled.span<ITextProps>`
  color: ${({ theme, color }) => theme.colors[color ?? 'primary300']};
  font-size: ${({ theme, size }) => theme.size[size ?? 'sm']};
  font-weight: ${({ theme, weight }) => theme.weight[weight ?? 'lg']};
`;

import { IBox } from "props";
import styled from "styled-components";

export const StyledBox = styled.div<IBox>`
  width: ${({ theme, width }) => theme.size[width ?? "fit"]};
  padding: ${({ theme, padding }) => theme.size[padding ?? "6"]};
  background: ${({ theme, color }) => theme.colors[color ?? "background200"]};
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "column"};
  border-radius: ${({ theme, rounded }) => theme.size[rounded ?? "0"]};
  box-shadow: 0 4px 3px ${({ theme }) => theme.colors.shadow};
  align-items: ${({ items }) => items ?? "center"};
  justify-content: ${({ justify }) => justify ?? "auto"};
  color: ${({theme}) => theme.colors.primary300};
`;

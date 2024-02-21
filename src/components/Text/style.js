import styled, { css } from "styled-components";

export const Text = styled.div`
  ${({ theme, fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${theme.fontWeights[fontWeight]};
    `}

  ${({ theme, color }) =>
    color &&
    css`
      color: ${theme.colors[color]};
    `}
`;

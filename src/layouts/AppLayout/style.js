import styled from "styled-components";

export const Container = styled.main`
  max-width: 960px;
  margin: auto;
`;

export const TopBelt = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 169px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

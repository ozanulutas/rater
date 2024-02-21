import styled from "styled-components";

import StyledLink from "components/Link";

export const Employee = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  transition: 0.15s;
  animation: fadeInAnimation ease 0.9s;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

export const Header = styled.header`
  position: relative;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Rating = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const RateButton = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Link = styled(StyledLink)`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
`;

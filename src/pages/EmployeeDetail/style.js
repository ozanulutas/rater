import Link from "components/Link";
import styled from "styled-components";

export const EmployeeDetail = styled.article``;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const Label = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 4px;
`;

export const GoBackLink = styled(Link)`
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  transition: 0.15s;

  &:hover {
    filter: brightness(1.1);
  }
`;

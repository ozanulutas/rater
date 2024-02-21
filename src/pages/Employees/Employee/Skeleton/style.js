import styled, { css } from "styled-components";

const flashAnimation = css`
  animation: flashAnimation ease-in 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes flashAnimation {
    0% {
      filter: brightness(1.05);
    }
    100% {
      filter: brightness(1);
    }
  }
`;

export const Skeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 18px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;

  ${flashAnimation}
`;

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const Text = styled.div`
  height: 19px;
  width: 196px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Circle = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.white};
`;

export const RateButton = styled(Circle)`
  margin-left: auto;
`;

export const AvatarWrapper = styled.div`
  position: relative;

  ${Circle} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

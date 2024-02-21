import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Skeleton() {
  return (
    <S.Skeleton>
      <S.AvatarWrapper>
        <S.Circle />
        <S.Avatar />
      </S.AvatarWrapper>
      <S.TextContainer>
        <S.Text />
        <S.Text />
        <S.Text />
      </S.TextContainer>
      <S.RateButton>
        <FontAwesomeIcon icon={faChevronUp} size="2x" />
      </S.RateButton>
    </S.Skeleton>
  );
}

export default Skeleton;

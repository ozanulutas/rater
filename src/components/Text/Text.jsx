import * as S from "./style";

function Text({ color, fontWeight, children }) {
  return (
    <S.Text color={color} fontWeight={fontWeight}>
      {children}
    </S.Text>
  );
}

export default Text;

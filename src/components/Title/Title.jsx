import * as S from "./style";

function Title({ level = 1, color, fontWeight, children }) {
  return (
    <S.Title as={`h${level}`} color={color} fontWeight={fontWeight}>
      {children}
    </S.Title>
  );
}

export default Title;

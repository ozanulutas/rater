import { Outlet } from "react-router-dom";

import * as S from "./style";

function AppLayout() {
  return (
    <S.Container>
      <S.TopBelt />
      <Outlet />
    </S.Container>
  );
}

export default AppLayout;

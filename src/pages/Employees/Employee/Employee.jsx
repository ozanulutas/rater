import { Path } from "router/Path";
import { replacePathParams } from "utils/replacePathParams";

import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Text from "components/Text";

function Employee({
  id,
  imgUrl,
  firstName,
  lastName,
  jobTitle,
  rating,
  address,
  email,
  phoneNumber,
  rateEmployee,
}) {
  return (
    <S.Employee onClick={() => rateEmployee(id)}>
      <S.Link
        to={replacePathParams(Path.EMPLOYEE_DETAIL, { employeeId: id })}
        state={{
          imgUrl,
          firstName,
          lastName,
          jobTitle,
          rating,
          address,
          email,
          phoneNumber,
        }}
      >
        <S.Header>
          <S.Rating>{rating}</S.Rating>
          <S.Img src={imgUrl} />
        </S.Header>

        <S.Info>
          <Text fontWeight="bold">{`${firstName} ${lastName}`}</Text>
          <Text color="gray">{jobTitle}</Text>
          <Text color="gray">{address.city}</Text>
        </S.Info>
      </S.Link>

      <S.RateButton>
        <FontAwesomeIcon icon={faChevronUp} size="2x" />
      </S.RateButton>
    </S.Employee>
  );
}

export default Employee;

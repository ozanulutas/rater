import { useLocation } from "react-router-dom";

import * as S from "./style";
import Title from "components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function EmployeeDetail() {
  const location = useLocation();

  const {
    firstName,
    lastName,
    address,
    imgUrl,
    jobTitle,
    rating,
    phoneNumber,
    email,
  } = location.state;

  const { city, country, number, state, street } = address;

  return (
    <S.EmployeeDetail>
      <S.PageHeader>
        <Title level={1} color="white">
          Employee Detail
        </Title>
        <S.GoBackLink to="..">
          <FontAwesomeIcon icon={faArrowLeftLong} size="2x" />
        </S.GoBackLink>
      </S.PageHeader>

      <S.Image src={imgUrl} />

      <S.InfoContainer>
        <S.Label>First Name</S.Label> {firstName}
        <S.Label>Last Name</S.Label> {lastName}
        <S.Label>Job Title</S.Label> {jobTitle}
        <S.Label>Phone Number</S.Label> {phoneNumber}
        <S.Label>Email</S.Label> {email}
        <S.Label>Address</S.Label>
        {`${street}, ${number}, ${state}, ${city}, ${country}`}
        <S.Label>Rating</S.Label> {rating}
      </S.InfoContainer>
    </S.EmployeeDetail>
  );
}

export default EmployeeDetail;

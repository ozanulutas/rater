import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_EMPLOYEES } from "graphql/queries";
import {
  increaseEmployeeRatingById,
  sortEmployeeByRatingDESC,
} from "./helpers";

import * as S from "./style";
import Title from "components/Title";
import Employee from "./Employee";
import Skeleton from "./Employee/Skeleton";

const LOADING_SKELETON_CONT = 3;

function Employees() {
  const [employees, setEmployees] = useState([]);
  const { data, loading } = useQuery(GET_EMPLOYEES);

  useEffect(() => {
    data?.employees &&
      setEmployees(
        structuredClone(data.employees).sort(sortEmployeeByRatingDESC)
      );
  }, [data?.employees]);

  const rateEmployee = (id) => {
    setEmployees((employees) =>
      structuredClone(employees)
        .map((employee) => increaseEmployeeRatingById(employee, id))
        .sort(sortEmployeeByRatingDESC)
    );
  };

  return (
    <S.Employees>
      <Title level={1} color="white">
        Employees
      </Title>

      <S.EmployeesList>
        {loading
          ? [...Array(LOADING_SKELETON_CONT).keys()].map((item) => (
              <Skeleton key={item} />
            ))
          : employees.map(
              ({
                id,
                address,
                firstName,
                imgUrl,
                jobTitle,
                lastName,
                rating,
                phoneNumber,
                email,
              }) => (
                <Employee
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  address={address}
                  imgUrl={imgUrl}
                  jobTitle={jobTitle}
                  rating={rating}
                  email={email}
                  phoneNumber={phoneNumber}
                  rateEmployee={rateEmployee}
                />
              )
            )}
      </S.EmployeesList>
    </S.Employees>
  );
}

export default Employees;

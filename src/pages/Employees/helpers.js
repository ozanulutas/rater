export const sortEmployeeByRatingDESC = (employeeA, employeeB) =>
  employeeB.rating - employeeA.rating;

export const increaseEmployeeRatingById = (employee, id) =>
  employee.id === id ? { ...employee, rating: ++employee.rating } : employee;

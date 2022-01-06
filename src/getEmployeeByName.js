const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((item1) => item1.firstName
    .includes(employeeName) || item1.lastName.includes(employeeName));
}
module.exports = getEmployeeByName;

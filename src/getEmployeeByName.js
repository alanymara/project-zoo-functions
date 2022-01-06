const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {}; return employees.find(({ firstName, lastName }) => firstName
    .includes(employeeName) || lastName.includes(employeeName));
}
module.exports = getEmployeeByName;

const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((item1) => item1.managers.some((item2) => item2 === id));
}
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((employee) => employee.managers
    .includes(managerId)).map((array) => `${array.firstName} ${array.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

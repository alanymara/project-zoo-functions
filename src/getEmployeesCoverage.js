const { species, employees } = require('../data/zoo_data');

function getInformations(responsavelPor, propriedade) {
  return species.filter(({ id }) => responsavelPor
    .includes(id)).map((animal) => animal[propriedade]);
}

function getEmployeesCoverage(personIdentification) {
  const objectEmployees = employees.map(({ id, responsibleFor, firstName, lastName }) => {
    const object = { id,
      fullName: `${firstName} ${lastName}`,
      species: getInformations(responsibleFor, 'name'),
      locations: getInformations(responsibleFor, 'location') };
    return object;
  });
  /* if (objectEmployees.filter((employee) => employee.fullName
    .includes(personIdentification))) {
    return 
  } */
  return objectEmployees;
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;

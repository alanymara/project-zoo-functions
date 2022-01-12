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
  if (!personIdentification) {
    return objectEmployees;
  }
  const verification = objectEmployees.filter((employee) => employee.fullName
    .includes(personIdentification.name) || employee.id.includes(personIdentification.id));
  if (verification.length !== 0) return verification[0];
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;

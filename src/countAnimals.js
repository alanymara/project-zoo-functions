// Auxilio do grupo de estudos para resolução

const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const findAnimals = species.reduce((acc, valueCurrent) =>
    ({ ...acc, [valueCurrent.name]: valueCurrent.residents.length }), {});
  if (!animal) {
    return findAnimals;
  }
  const { specie } = animal;
  const selecionado = species.find((animalSelected) => animalSelected.name === specie);
  const result = selecionado.residents.reduce((acc, element) => {
    if (element.sex === animal.sex) {
      return acc + 1;
    }
    return acc;
  }, 0);
  if (animal.sex) return result; return findAnimals[specie];
}
module.exports = countAnimals;

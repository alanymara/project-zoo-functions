const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species
    .find((item1) => item1.name === animal).residents
    .every((item2) => item2.age >= age);
}

module.exports = getAnimalsOlderThan;

const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return []; return species.filter(({ id }) => ids.includes(id));
}

module.exports = getSpeciesByIds;

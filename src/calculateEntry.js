const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18);
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50);
  const senior = entrants.filter(({ age }) => age >= 50);
  return { adult: adult.length, child: child.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) return 0;

  const { adult, child, senior } = prices;
  const visitantes = countEntrants(entrants);
  const { adult: adultos, child: criancas, senior: idosos } = visitantes;

  const totalPrice = (adult * adultos) + (child * criancas) + (senior * idosos);
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };

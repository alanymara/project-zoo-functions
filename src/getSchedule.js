// Auxilio do grupo de estudos para resolução
const { species, hours } = require('../data/zoo_data');

const days = Object.keys(hours);

function selectedPhrase(weekDays) {
  if (weekDays !== 'Monday') {
    return { officeHour: `Open from ${hours[weekDays].open}am until ${hours[weekDays].close}pm` };
  }
  return { officeHour: 'CLOSED' };
}

function exhibitionAnimals(diaDaSemana) {
  const animaisDisponiveis = species.filter((specie) => specie.availability
    .includes(diaDaSemana));
  const nomeAnimaisDisponiveis = animaisDisponiveis.map((animal) => animal.name);
  if (diaDaSemana !== 'Monday') {
    return { exhibition: nomeAnimaisDisponiveis };
  }
  return { exhibition: 'The zoo will be closed!' };
}

function getSchedule(scheduleTarget) {
  const horarios = days.reduce((acc, day) => {
    const phrase = { ...selectedPhrase(day), ...exhibitionAnimals(day) };
    return { ...acc, [day]: phrase };
  }, {});
  const diaEscolhido = days.find((day) => day === scheduleTarget);
  const verificaAnimal = species.find(({ name }) => name === scheduleTarget);
  if (scheduleTarget === undefined) return horarios;
  if (scheduleTarget === diaEscolhido) return { [scheduleTarget]: horarios[scheduleTarget] };
  if (verificaAnimal === undefined) return horarios;
  const nomeAnimal = verificaAnimal.name;
  const disponibilidade = species.find(({ name }) => name === nomeAnimal).availability;
  if (scheduleTarget === nomeAnimal) return disponibilidade;
}
module.exports = getSchedule;

// practice 1

const player = {
  name: 'Sakib Al Hasan',
  age: 37,
  isMarried: true,
  job: {
    full_time: 'cricketer',
    part_time: 'business',
    side_work: 'charity'
  },
  team: [ 'BPL','Bangladesh National Team', 'tigers', 'International team'],
  work_time: function (time) {
    const details = `
    ${this.name} works hard to get glory for Bangladesh cricket team.
    He starts his daily practice at ${time} am.
    `;
    console.log(details)
  }
}
// player.work_time('5:00')

// practice 2
const maliha = `
Maliha is big fan of ${player.name}.
She is also a ${player.job.part_time} partner of him.
Maliha is a sponsor of ${player.team[1]}.
`;
console.log(maliha);

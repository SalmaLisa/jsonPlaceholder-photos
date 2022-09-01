//practice 6

//6.1
const player = {
  name: 'Sakib Al Hasan',
  age: 37,
  isMarried: true,
  job: 'cricketer',
  work_time: `
    ${this.name} works hard to get glory for Bangladesh cricket team.
    `
}
const { name,isMarried, ...rest } = player;
// console.log(name);
// console.log({...rest})

//self-practice
// const team = ['BPL', 'Bangladesh National Team', 'bd tigers', 'International team'];
// const [team1, ...rest] = team;
// console.log([...rest]);
// console.log(...rest);
// console.log(team1)

//6.2
const balances = [45, 667, 89, 23, 14, 58, 68, 54, 33, 99, 75];
const [taka, balance] = balances;
console.log(balance)
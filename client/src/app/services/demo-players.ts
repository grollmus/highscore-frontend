import * as faker from 'faker';

const playersCount = Math.floor(Math.random() * 50);
const players = new Array(playersCount).map(playerNumber => {
  const playerScoresCount = Math.floor(Math.random() * 10);
  return {
    name: faker.name.firstName.toString().toUpperCase,
    scores: new Array(playerScoresCount).map(scoreNumber => {
      return {
        score: faker.random.number(10000)
      };
    })
  };
});

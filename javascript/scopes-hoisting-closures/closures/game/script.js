function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `your ${gameName} score is ${score}`;
  };
}

const tennisGame = createGame("tennis");
const footballGame = createGame("football");

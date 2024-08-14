
const Randomiser = (array) =>{
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at index i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function acca1(){
  let game1 = ["Win", "Lose", "Draw"];
  let game2 = ["Win", "Lose", "Draw"];
let game3 = ["Win", "Lose", "Draw"];

const game1Action = Randomiser(game1);
const game2Action = Randomiser(game2);
const game3Action = Randomiser(game3);

document.getElementById(
  `result`
).textContent = `Game 1: ${game1Action}\nGame 2: ${game2Action}\nGame 3: ${game3Action}`;
}


console.log(game1Action[0]);
console.log(game2Action[0]);
console.log(game3Action[0]);


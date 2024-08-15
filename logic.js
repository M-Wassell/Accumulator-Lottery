
const Randomiser = (array) =>{
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at index i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function single() {
  let game1 = ["Win", "Lose", "Draw"];

  const game1Action = Randomiser(game1);

  document.getElementById(`single`).innerHTML 
  = `Game 1: ${game1Action[0]}<br>`;
}

function acca1(){
  let game1 = ["Win", "Lose", "Draw"];
  let game2 = ["Win", "Lose", "Draw"];
  let game3 = ["Win", "Lose", "Draw"];

const game1Action = Randomiser(game1);
const game2Action = Randomiser(game2);
const game3Action = Randomiser(game3);

document.getElementById(`acca1`).innerHTML 
= `Game 1: ${game1Action[0]}<br>
   Game 2: ${game2Action[0]}<br>
   Game 3: ${game3Action[0]}`;
}

function acca2(){
    let game1 = ["Win", "Lose", "Draw"];
    let game2 = ["Win", "Lose", "Draw"];
    let game3 = ["Win", "Lose", "Draw"];
    let game4 = ["Win", "Lose", "Draw"];
    let game5 = ["Win", "Lose", "Draw"];
    let game6 = ["Win", "Lose", "Draw"];

    const game1Action = Randomiser(game1);
    const game2Action = Randomiser(game2);
    const game3Action = Randomiser(game3);
    const game4Action = Randomiser(game4);
    const game5Action = Randomiser(game5);
    const game6Action = Randomiser(game6);

    document.getElementById(`acca2`).innerHTML 
    = `Game 1: ${game1Action[0]}<br>
       Game 2: ${game2Action[0]}<br>
       Game 3: ${game3Action[0]}<br>
       Game 4: ${game4Action[0]}<br>
       Game 5: ${game5Action[0]}<br>
       Game 6: ${game6Action[0]}`;
}

function acca3() {
  let game1 = ["Win", "Lose", "Draw"];
  let game2 = ["Win", "Lose", "Draw"];
  let game3 = ["Win", "Lose", "Draw"];
  let game4 = ["Win", "Lose", "Draw"];
  let game5 = ["Win", "Lose", "Draw"];
  let game6 = ["Win", "Lose", "Draw"];
  let game7 = ["Win", "Lose", "Draw"];
  let game8 = ["Win", "Lose", "Draw"];
  let game9 = ["Win", "Lose", "Draw"];

  const game1Action = Randomiser(game1);
  const game2Action = Randomiser(game2);
  const game3Action = Randomiser(game3);
  const game4Action = Randomiser(game4);
  const game5Action = Randomiser(game5);
  const game6Action = Randomiser(game6);
  const game7Action = Randomiser(game7);
  const game8Action = Randomiser(game8);
  const game9Action = Randomiser(game9);

  document.getElementById(`acca3`).innerHTML 
    = `Game 1: ${game1Action[0]}<br>
       Game 2: ${game2Action[0]}<br>
       Game 3: ${game3Action[0]}<br>
       Game 4: ${game4Action[0]}<br>
       Game 5: ${game5Action[0]}<br>
       Game 6: ${game6Action[0]}<br>
       Game 7: ${game7Action[0]}<br>
       Game 8: ${game8Action[0]}<br>
       Game 9: ${game9Action[0]}`;
}



type choice = "Камень" | "Ножницы" | "Бумага";

interface gameResult {
    playerChoice: choice,
    computerChoice: choice,
    result: string
}


function playRockPaperScissors(playerChoice: choice): gameResult {
    const choices: choice[] = ["Камень","Ножницы","Бумага"]
    if(!choices.includes(playerChoice)){
        throw new Error("нету такого, только Камень,Ножницы,Бумаг")
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result: string;
    if ( playerChoice === computerChoice){
        result = "ничья"
    }
    else if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ){
        result = "Вы победили"
    }
    else{
        result = "Вы проиграли"
    }

    return {
        playerChoice,
        computerChoice,
        result,
    };
}

console.log(playRockPaperScissors("Камень"))
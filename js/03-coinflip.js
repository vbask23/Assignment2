let randomNum = Math.round(Math.random())
let choice = prompt("Enter \'h\' for heads or \'t\' for tails")
if (randomNum  > 0) {
    if (choice === 'h') {
        alert("The flip was heads and you chose heads...you win!")
    } else if (choice === 't') {
        alert("The flip was heads but you chose tails...you lose!")
    }
} else if (randomNum < 1 ) {
    if (choice === 't') {
        alert("The flip was tails and you chose tails...you win!")
    } else if (choice === 'h') {
        alert("The flip was tails but you chose heads...you lose!")
    }
}

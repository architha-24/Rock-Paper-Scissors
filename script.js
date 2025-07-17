let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

function game(userChoice) {
    let computerChoice = '';
    let result = '';
    const list = ['Rock', 'Paper', 'Scissors'];
    computerChoice = list[Math.floor(Math.random() * list.length)];

    if (userChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            result = `Computer chose ${computerChoice}. It's a TIE`;
            score.ties += 1;
        } else if (computerChoice === 'Paper') {
            result = `Computer chose ${computerChoice}. Computer Wins`;
            score.losses += 1;
        } else {
            result = `Computer chose ${computerChoice}. You Win`;
            score.wins += 1;
        }
    }

    if (userChoice === 'Paper') {
        if (computerChoice === 'Paper') {
            result = `Computer chose ${computerChoice}. It's a TIE`;
            score.ties += 1;
        } else if (computerChoice === 'Scissors') {
            result = `Computer chose ${computerChoice}. Computer Wins`;
            score.losses += 1;
        } else {
            result = `Computer chose ${computerChoice}. You Win`;
            score.wins += 1;
        }
    }

    if (userChoice === 'Scissors') {
        if (computerChoice === 'Scissors') {
            result = `Computer chose ${computerChoice}. It's a TIE`;
            score.ties += 1;
        } else if (computerChoice === 'Rock') {
            result = `Computer chose ${computerChoice}. Computer Wins`;
            score.losses += 1;
        } else {
            result = `Computer chose ${computerChoice}. You Win`;
            score.wins += 1;
        }
    }

    document.getElementById("result").textContent = result;
    document.getElementById("scoreDisplay").textContent = "";
    document.getElementById("resetscore").textContent = "";

}

function showScore() {
    document.getElementById("scoreDisplay").textContent =
        `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.getElementById("scoreDisplay").textContent = "";
    document.getElementById("resetscore").textContent = "Score is Reset!You can restart the game!";
    showScore();
}
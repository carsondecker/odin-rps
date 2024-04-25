function play() {
    let playerScore = 0
    let computerScore = 0
    let roundCount = 0

    let result = document.getElementById("result")
    let pScore = document.getElementById("player-score")
    let cScore = document.getElementById("computer-score")
    let rockButton = document.getElementById("rock-button")
    let paperButton = document.getElementById("paper-button")
    let scissorsButton = document.getElementById("scissors-button")

    const getHumanChoice = (move) => { 
        playRound(move, getComputerChoice())
    }

    const getComputerChoice = () => {
        switch(Math.floor(Math.random() * 3)) {
            case 0:
                return "rock"
            case 1:
                return "paper"
            case 2:
                return "scissors"
        }
    }

    rockButton.addEventListener("click", () => getHumanChoice("rock"))
    paperButton.addEventListener("click", () => getHumanChoice("paper"))
    scissorsButton.addEventListener("click", () => getHumanChoice("scissors"))

    function playRound(playerMove, computerMove) {
        roundCount++
        if (roundCount == 5)
        {
            roundCount = 0
            reset()
        }
            
        
        if (playerMove == computerMove)
            result.innerHTML = "Draw!"
        else if ((playerMove == "rock" && computerMove == "scissors") || (playerMove == "paper" && computerMove == "rock") || (playerMove == "scissors" && computerMove == "paper")){
            result.innerHTML = "Computer picked " + computerMove + ", you win!"
            playerScore++
            pScore.innerHTML = "Player Score: " + playerScore
        }
        else {
            result.innerHTML = "Computer picked " + computerMove + ", you lose!"
            computerScore++
            cScore.innerHTML = "Computer Score: " + computerScore
        }
        
        playerMove = null
    }

    function reset() {
        playerScore = 0
        computerScore = 0
        pScore.innerHTML = "Player Score: " + playerScore
        cScore.innerHTML = "Computer Score: " + computerScore
        result.innerHTML = ""
    }
}
window.onload = play
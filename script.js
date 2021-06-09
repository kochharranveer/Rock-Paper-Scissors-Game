var UserChoice = "";
var CompChoice = "";
var Winner = "";
var ResultStatement;
let userScore = 0;
let compScore = 0;
var MatchWinner;
var MatchScore;

let Display = document.createElement('h2');
Display.className = "Display"
let Score = document.createElement('h1');
Score.className = "Score"
let MatchWinnerDisplay = document.createElement('h2');
MatchWinnerDisplay.className = "MatchWinnerDisplay"

function userchoice (user_choice) {
    UserChoice = user_choice;
}

function compchoice () {
    var choice = Math.floor(Math.random()*(2+1));

    switch (choice) {
        case 0 :
            CompChoice = "Rock";
            break;
        case 1 :
            CompChoice = "Paper";
            break;
        case 2 :
            CompChoice = "Scissors";
            break;
    }
    console.log(CompChoice);
}

function result() {

    if (UserChoice != "") {
        if (UserChoice == "Rock") {

            if (CompChoice == "Rock") {
                Winner = "Both";
            }
            if (CompChoice == "Paper") {
                Winner = "Computer";
            }
            if (CompChoice == "Scissors") {
                Winner = "User";
            }
        }
        if (UserChoice == "Paper") {

            if (CompChoice == "Rock") {
                Winner = "User";
            }
            if (CompChoice == "Paper") {
                Winner = "Both";
            }
            if (CompChoice == "Scissors") {
                Winner = "Computer";
            }
        }
        if (UserChoice == "Scissors") {

            if (CompChoice == "Rock") {
                Winner = "Computer";
            }
            if (CompChoice == "Paper") {
                Winner = "User";
            }
            if (CompChoice == "Scissors") {
                Winner = "Both";
            }
        }

    if (Winner == "User") {
        ResultStatement = "Computer used "+CompChoice+". You used "+UserChoice+". You won";
        userScore++;
    } if (Winner == "Computer") {
        ResultStatement = "Computer used "+CompChoice+". You used "+UserChoice+". You lost";
        compScore++;
    } if (Winner == "Both") {
        ResultStatement = "You both used "+UserChoice+". Its a tie";
    }

    if (userScore > compScore) {
        MatchWinner = "User";
    } if (compScore > userScore) {
        MatchWinner = "Computer";
    } if (userScore == compScore) {
        MatchWinner = "It's a Tie"
    }

    if (MatchWinner == "User") {
        MatchScore = "User is Winning";
    }if (MatchWinner == "Computer") {
        MatchScore = "Computer is Winning";
    }if (MatchWinner == "It's a Tie") {
        MatchScore = "It's a Tie";
    }

}
}

function refreshScore() {

    Display.textContent = ResultStatement
    document.body.append(Display)

    Score.textContent = userScore+" : "+compScore;
    document.body.append(Score)

    // MatchWinnerDisplay.textContent = MatchScore;
    // document.body.append(MatchWinnerDisplay)

}
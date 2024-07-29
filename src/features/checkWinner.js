import { useSelector, useDispatch } from "react-redux";



export const checkWinner = (gamegroundstate) => {
    const winningCombinations = [
        [0, 1, 2], // Ligne 1
        [3, 4, 5], // Ligne 2
        [6, 7, 8], // Ligne 3
        [0, 3, 6], // Colonne 1
        [1, 4, 7], // Colonne 2
        [2, 5, 8], // Colonne 3
        [0, 4, 8], // Diagonale gauche à droite
        [2, 4, 6]  // Diagonale droite à gauche
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;

        if (gamegroundstate[a] && 
            gamegroundstate[a] === gamegroundstate[b] && 
            gamegroundstate[a] === gamegroundstate[c]) {
            return gamegroundstate[a]; // Retourne le symbole gagnant
        }
    }

    return null; // Aucun gagnant
}


export const useGameResult = () => {
    const gamegroundstate = useSelector((state) => state.gamedata.gameGroundState);
    const playerIcon = useSelector((state) => state.gamedata.playerIcon);

    const winner = checkWinner(gamegroundstate);

    if (winner) {
        return winner === playerIcon ? "Player" : "AI";
    }

    if (gamegroundstate.every(cell => cell !== null)) {
        return "Draw";
    }

    return null;
}



const checkWinner = (gamegroundstate) => {
    let someoneWon=false;


    const winningCombination =[
        [0, 1, 2], // Ligne 1
        [3, 4, 5], // Ligne 2
        [6, 7, 8], // Ligne 3
        [0, 3, 6], // Colonne 1
        [1, 4, 7], // Colonne 2
        [2, 5, 8], // Colonne 3
        [0, 4, 8], // Diagonale gauche à droite
        [2, 4, 6]  // Diagonale droite à gauche
    ]

    for (let combination of winningCombination)
    {
        const [a,b,c] = combination;

        if (gamegroundstate[a] && gamegroundstate[b] && gamegroundstate[c]
            && gamegroundstate[a] === gamegroundstate[b]
            && gamegroundstate[a] === gamegroundstate[c])   
            {
                someoneWon=true;
            }
        }

    if (someoneWon)
    {
        whoWon(a)
    }


    const whoWon = (oneWinningCaseIndex) => {
        let playerWon = false;
        const playerIcon = useSelector((state) => state.gamedata.playerIcon)
        if(gamegroundstate[oneWinningCaseIndex] === playerIcon)
            {
                 playerWon = true;
            }
            else { playerWon = false;}
            return playerWon;
    }

    return checkWinner();
}
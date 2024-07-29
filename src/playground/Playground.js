import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Spin } from "antd";
import './Playground.css'
import { setGameStart, setGroundCaseState, setPlayerWon} from "../features/gameData/gamedataSlice";
import { CloseOutlined } from '@ant-design/icons';
import { MinusCircleOutlined } from '@ant-design/icons';
import useAi from "../useAi";
import { setEndingScreen } from "../features/gameData/gamedataSlice";





function Playground() {
    const dispatch = useDispatch();
    const available = useSelector((state) => state.gamedata.gameStart);
    const groundState = useSelector((state) => state.gamedata.gameGroundState)
    const playerIcon = useSelector((state) => state.gamedata.playerIcon)
    const casesAlreadyPlayed = useSelector((state) => state.gamedata.casePlayed)
    const { aiplay } = useAi();
    const [winner, setWinner] = useState(null)
    const [playerWinner, setPlayerWinner] = useState(null);


    const iconMap = {
        CloseOutlined: CloseOutlined,
        MinusCircleOutlined: MinusCircleOutlined
    };

    const checkWinner = (state) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6] 
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return true;
            }
        }

        return null;
    };


    const playTurn = (index) => {
        if (groundState[index] === null && !playerWinner) {
            dispatch(setGroundCaseState({index, Icon: playerIcon}));
            
            const newState = [...groundState];
            newState[index] = playerIcon;
            
            const Winner = checkWinner(newState);
            if (Winner) {
                console.log("Le joueur à gagné !")
                dispatch(setPlayerWon(true))
                dispatch(setEndingScreen(true))
                dispatch(setGameStart(false))
                return null;
            }

            // AI's turn    
            setTimeout(() => {
                const newCasesPlayed = [...casesAlreadyPlayed, index]
                const Winner = aiplay(newCasesPlayed)
                if (Winner) {
                    setPlayerWinner(false);
                    dispatch(setPlayerWon(false))
                    dispatch(setEndingScreen(true))
                    dispatch(setGameStart(false))
                    console.log("L'IA à gagné !")
                    return null;
                }
            }, 500); // Délai pour simuler la "réflexion" de l'IA
        }
    };




    const play = (index) => {
        console.log(groundState[index])
            if (groundState[index]===null) {
                dispatch(setGroundCaseState({index, Icon: playerIcon}))
                console.log("On a dispatch")
            }
    };


    return (
        available && (
            <div className="groundContainer">
                <div className="ground">
                {groundState.map((iconName, index) => {
                        const IconComponent = iconMap[iconName];
                        return (
                            <Button
                                key={index}
                                className="case"
                                onClick={() => playTurn(index)}
                            >
                                {IconComponent ? <IconComponent className='playIcon'/> : null}
                            </Button>
                        );
                    })}
                </div>
            </div>
        )
    );
}
export default Playground;

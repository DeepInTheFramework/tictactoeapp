import { createSlice } from "@reduxjs/toolkit";
import { CloseOutlined } from '@ant-design/icons';
import {MinusCircleOutlined} from '@ant-design/icons';

const initialState = {
    gameStart: false,
    gameGroundState: Array(9).fill(null),
    isPlayerFirst: true,
    isPlayerTurn: true,
    playerIcon: 'CloseOutlined',  // Assurez-vous que ce sont les composants et non des chaînes
    aiIcon: 'MinusCircleOutlined',  // Idem ici
    casePlayed: [],
    endingScreen: null,
    playerWon: null
};

export const gameSlice = createSlice({
    name: 'gamedata',
    initialState: {
        gameStart: false,
        gameGroundState : Array(9).fill(null),
        isPlayerFirst : true,
        isPlayerTurn : true,
        playerIcon : 'CloseOutlined',
        aiIcon :'MinusCircleOutlined',
        casePlayed : Array(),
        endingScreen : null,
        playerWon : null
    },

    reducers: {
        setGameStart: (state, action) => {
            state.gameStart = action.payload
        },

        setGroundState: (state, action) => {
            state.gameGroundState = action.payload
        },

        setGroundCaseState: (state, action) => {
            const { index, Icon } = action.payload;
            state.gameGroundState[index] = Icon;
            state.casePlayed = [...state.casePlayed, index]; // Use state.casePlayed
            console.log(`Set case ${index} to`, Icon);
        },

        setEndingScreen: (state, action) => {
            state.endingScreen = action.payload
        },

        setPlayerWon: (state, action) => {
            state.playerWon = action.payload
        },

        resetGame: (state) => {
            return initialState;
        }
    }
})

export const { setGameStart, setGroundState, setGroundCaseState, setEndingScreen, setPlayerWon, resetGame } = gameSlice.actions

export default gameSlice.reducer
import { useDispatch, useSelector } from 'react-redux';
import { setGroundCaseState, setDidPlayerStart } from './features/gameData/gamedataSlice';


const useAi = (groundUpdated) => {
  const dispatch = useDispatch();
  const aiIcon = useSelector((state) => state.gamedata.aiIcon);
  const caseAlreadyPlayed = useSelector((state) => state.gamedata.casePlayed)
  const groundState = useSelector((state) => state.gamedata.gameGroundState)

  const whoStart = () => {
      const pick = Math.round(Math.random())
      console.log("Pick égal :", pick)

    if(pick>0)
    {
      console.log("Le joueur start")
        dispatch(setDidPlayerStart(true))
    }

    else {
      console.log("L'IA start")
      dispatch(setDidPlayerStart(false))
      setTimeout(() => {
        aiplay(Array(9).fill(null))
      }, "1000");
    }

}


  const choseACase = (caseUpdated) => {
    let caseChosed;
    do
    {
      caseChosed=Math.floor(Math.random() * 9); // Retourne un nombre entier entre 0 et 8
    }
        while (caseUpdated.includes(caseChosed))

    return caseChosed;
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

  const aiplay = (caseUpdated) => {
    console.log("ai is playing")
    const caseIndex = choseACase(caseUpdated);
    dispatch(setGroundCaseState({ index: caseIndex, Icon: aiIcon }));
    const newState = [...groundState];
    newState[caseIndex] = aiIcon;
    return checkWinner(newState)
  };

  return { aiplay, whoStart };
};

export default useAi;

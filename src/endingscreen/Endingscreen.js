import { useSelector, useDispatch } from "react-redux"
import { Button } from "antd";
import { resetGame } from "../features/gameData/gamedataSlice";



function Endingscreen () {
    const dispatch = useDispatch()
    const replay = () => {
        dispatch(resetGame());
    }

    const isPlayerWin = useSelector((state) => state.gamedata.playerWon)
    return (
        <>
        {isPlayerWin ? (
            <h1>Felicitations pour votre victoire !</h1>
        ) :
    
    (
        <h1>N'abandonnez pas et reessayez</h1>
    )}

    
<Button
type="primary"
onClick={() => replay()}
>
Play Again !
</Button>


<Button 
          type="primary" 
          size="large"
          disabled
        >
        Save scores
        </Button>

    </>
    )

    
}

export default Endingscreen;
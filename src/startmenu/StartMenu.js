import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { setGameStart } from "../features/gameData/gamedataSlice";
import  './StartMenu.css';


function StartMenu() {
    const dispatch = useDispatch()
    const gameStart = useSelector((state) => state.gamedata.gameStart)

    const startGame = () => {
        dispatch(setGameStart(true))
    }

    return (
        <>
{!gameStart && (
    <div className='buttonContainer'>
        <Button 
          type="primary" 
          size="large" 
          onClick={startGame}
          icon={<PlayCircleOutlined />}
        >
          Start Game
        </Button>

        <Button 
          type="primary" 
          size="large" 
          onClick={startGame}
        >
          Read rules
        </Button>

        <Button 
          type="primary" 
          size="large"
          disabled
        >
        Scores
        </Button>
        </div>
      )}
      
        </>
    )
}

export default StartMenu;
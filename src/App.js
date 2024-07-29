import logo from './logo.svg';
import './App.css';
import StartMenu from './startmenu/StartMenu';
import Playground from './playground/Playground'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd';
import EndingScreen from './endingscreen/Endingscreen.js'



function App() {
  const gameSet = useSelector((state) => !state.gamedata.gameStart)
  const endingScreen = useSelector((state) => state.gamedata.endingScreen)
    const linkedinRedirect = () => {
      window.open('https://github.com/DeepInTheFramework', '_blank');
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />



        {endingScreen ? (
                    <EndingScreen />

        ) : (
          gameSet ? <StartMenu /> : <Playground />

        )}


        <div className='socialsContainer'>


        <Button
        type='primary'
        onClick={() => linkedinRedirect()}
        >Linkedin
        </Button>


        <Button
        type='primary'
        >Github
        </Button>

      
        </div>

      </header>
    </div>
  );
}

export default App;

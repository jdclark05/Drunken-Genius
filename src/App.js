import { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/Gameboard/round1';
import GameBoard2 from './components/Gameboard/round2';
import FinalQuestion from './components/Gameboard/final';
import Rules from './components/Rules/page1';
import Rules2 from './components/Rules/page2';
import SelectCategories from './components/CategorySelect/index';
import Contestants from './components/ContestantInput/index';
import IntroPage from './components/HomePage/index';
import { Router } from '@reach/router';
import Timer from'./helpers/timer1';
import Timer2 from'./helpers/timer2';
import { Helmet } from "react-helmet";
import logo from './public/images/drunken-genius-logo.png';
import WinnersCircle from './components/WinnersCircle';

function App() {
  const [cat1, setCat1] = useState([]);
  const [cat2, setCat2] = useState([]);
  const [cat3, setCat3] = useState([]);
  const [cat4, setCat4] = useState([]);
  const [cat5, setCat5] = useState([]);
  const [cat6, setCat6] = useState([]);
  const [cat7, setCat7] = useState([]);
  const [cat8, setCat8] = useState([]);
  const [cat9, setCat9] = useState([]);
  const [cat10, setCat10] = useState([]);
  const [finalQ, setFinalQ] = useState([]);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player3Score, setPlayer3Score] = useState(0);
  const [player4Score, setPlayer4Score] = useState(0);
  const [player5Score, setPlayer5Score] = useState(0);
  const [player6Score, setPlayer6Score] = useState(0);
  const [Player1, setPlayer1] = useState('');
  const [Player2, setPlayer2] = useState('');
  const [Player3, setPlayer3] = useState('');
  const [Player4, setPlayer4] = useState('');
  const [Player5, setPlayer5] = useState('');
  const [Player6, setPlayer6] = useState('');

  const onRender = () => {
    setPlayer1(localStorage.getItem('Player1'));
    setPlayer2(localStorage.getItem('Player2'));
    setPlayer3(localStorage.getItem('Player3'));
    setPlayer4(localStorage.getItem('Player4'));
    setPlayer5(localStorage.getItem('Player5'));
    setPlayer6(localStorage.getItem('Player6'));
  }

  const onAdjustScore = (playerNumber, points, executionType) => {
    let score = parseInt(points);
    if (executionType === "add"){
      if (playerNumber === 1) {
        setPlayer1Score(player1Score + score);
      }
      if (playerNumber === 2) {
        setPlayer2Score(player2Score + score);
      }
      if (playerNumber === 3) {
        setPlayer3Score(player3Score + score);
      }
      if (playerNumber === 4) {
        setPlayer4Score(player4Score + score);
      }
      if (playerNumber === 5) {
        setPlayer5Score(player5Score + score);
      }
      if (playerNumber === 6) {
        setPlayer6Score(player6Score + score);
      }
    } else if (executionType === "subtract") {
      if (playerNumber === 1) {
        setPlayer1Score(player1Score - score);
      }
      if (playerNumber === 2) {
        setPlayer2Score(player2Score - score);
      }
      if (playerNumber === 3) {
        setPlayer3Score(player3Score - score);
      }
      if (playerNumber === 4) {
        setPlayer4Score(player4Score - score);
      }
      if (playerNumber === 5) {
        setPlayer5Score(player5Score - score);
      }
      if (playerNumber === 6) {
        setPlayer6Score(player6Score - score);
      }
    }
  }

  const catSubmit = (catForm) => {
    setCat1(catForm[0][0]);
    setCat2(catForm[0][1]);
    setCat3(catForm[0][2]);
    setCat4(catForm[0][3]);
    setCat5(catForm[0][4]);
    setCat6(catForm[0][5]);
    setCat7(catForm[0][6]);
    setCat8(catForm[0][7]);
    setCat9(catForm[0][8]);
    setCat10(catForm[0][9]);
    setFinalQ(catForm[1][0]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('APP.JS');
    }, 1000);
    return () => clearTimeout(timer);
  }, [cat1], [cat2], [cat3], [cat4], [cat5], [cat6], [cat7], [cat8], [cat9], [cat10], [finalQ], [player1Score], [player2Score], [player3Score], [player4Score], [player5Score], [player6Score]);

  const style1 = {
    backgroundImage: `url(${logo})`,
    backgroundSize: '200px', 
    height: '0px',
    width: '0px',
    paddingTop: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    marginLeft: '-30px',
  }

  const scoreColor = (score) => {
    if (score === 0) {
      return 'white';
    } else if (score < 0) {
      return 'red';
    } else if (score > 0) {
      return 'green';
    }
  }

  const resetGame = () => {
    setCat1([]);
    setCat2([]);
    setCat3([]);
    setCat4([]);
    setCat5([]);
    setCat6([]);
    setCat7([]);
    setCat8([]);
    setCat9([]);
    setCat10([]);
    setFinalQ([]);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setPlayer3Score(0);
    setPlayer4Score(0);
    setPlayer5Score(0);
    setPlayer6Score(0);
    setPlayer1('');
    setPlayer2('');
    setPlayer3('');
    setPlayer4('');
    setPlayer5('');
    setPlayer6('');
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Drunken Genius</title>
          <meta name="description" description="trivia drinking game"/>
        </Helmet>
        <div className="playArea">
          <Router>
            <IntroPage path="/" />
            <Rules path="/rules1"/>
            <Rules2 path="/rules2" />
            <SelectCategories path="/categories" catSubmit={catSubmit}/>
            <Contestants path="/contestants" onRender={onRender}/>
            <GameBoard path="/game1" onAdjustScore={ onAdjustScore } Player1={ Player1 } Player2={ Player2 } Player3={ Player3 } Player4={ Player4 } Player5={ Player5 } Player6={ Player6 } player1Score={ player1Score } player2Score={ player2Score } player3Score={ player3Score } player4Score={ player4Score } player5Score={ player5Score } player6Score={ player6Score } cat1={ cat1 } cat2={ cat2 } cat3={ cat3 } cat4={ cat4 } cat5={ cat5 } />
            <GameBoard2 path="/game2" onAdjustScore={ onAdjustScore } Player1={ Player1 } Player2={ Player2 } Player3={ Player3 } Player4={ Player4 } Player5={ Player5 } Player6={ Player6 } player1Score={ player1Score } player2Score={ player2Score } player3Score={ player3Score } player4Score={ player4Score } player5Score={ player5Score } player6Score={ player6Score } cat6={ cat6 } cat7={ cat7 } cat8={ cat8 } cat9={ cat9 } cat10={ cat10 }  />
            <FinalQuestion path="/final" onAdjustScore={ onAdjustScore } Player1={ Player1 } Player2={ Player2 } Player3={ Player3 } Player4={ Player4 } Player5={ Player5 } Player6={ Player6 } player1Score={ player1Score } player2Score={ player2Score } player3Score={ player3Score } player4Score={ player4Score } player5Score={ player5Score } player6Score={ player6Score } finalQ={finalQ} />
            <WinnersCircle path="/results" Player1={ Player1 } Player2={ Player2 } Player3={ Player3 } Player4={ Player4 } Player5={ Player5 } Player6={ Player6 } player1Score={ player1Score } player2Score={ player2Score } player3Score={ player3Score } player4Score={ player4Score } player5Score={ player5Score } player6Score={ player6Score } resetGame={ resetGame }/>
            <Timer path="/timer" />
            <Timer2 path="/timer2" />
          </Router>
        </div>
        <div>
          { Player1.length 
              ? <div className="leaderBoard">
                  <h4 className="leaderboardHeader">Score Board</h4>
                      <div className="playerQuarters">
                          {Player1 ? 
                            <div className="scoreBoardPlayers">
                              <h5 className="playerScoreData">{Player1}</h5>
                              <div className="scoreDisplay">
                                <h5 className="scoreText" style={{ color: scoreColor(player1Score) }}>{player1Score}</h5>
                              </div>
                            </div>
                            : <> </>
                          }
                          {Player2 ? 
                            <div className="scoreBoardPlayers">
                              <h5 className="playerScoreData">{Player2}</h5>
                              <h5 className="scoreText" style={{ color: scoreColor(player2Score) }}>{player2Score}</h5> 
                            </div>
                            : <> </> 
                          }
                          {Player3 ? 
                            <div className="scoreBoardPlayers">
                              <h5 className="playerScoreData">{Player3}</h5>
                              <h5 className="scoreText" style={{ color: scoreColor(player3Score) }}>{player3Score}</h5>
                            </div> 
                            : <> </> 
                          }
                          {Player4 ? 
                            <div className="scoreBoardPlayers">
                              <h5 className="playerScoreData">{Player4}</h5>
                              <h5 className="scoreText" style={{ color: scoreColor(player4Score) }}>{player4Score}</h5> 
                            </div> 
                            : <> </> 
                          }
                          {Player5 ? 
                            <div className="scoreBoardPlayers">
                              <h5 className="playerScoreData">{Player5}</h5>
                              <h5 className="scoreText" style={{ color: scoreColor(player5Score) }}>{player5Score}</h5> 
                            </div> 
                            : <> </> 
                          }
                          {Player6 ? 
                            <div className="scoreBoardPlayers">
                              <h5 className="playerScoreData">{Player6}</h5>
                              <h5 className="scoreText" style={{ color: scoreColor(player6Score) }}>{player6Score}</h5> 
                            </div> 
                            : <> </> 
                          }
                      </div>
                </div>
                : null
            }
          </div>
      </div>
    </div>
  );
}

export default App;
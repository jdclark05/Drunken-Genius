import React, { useState, useEffect } from 'react';
import '../../App.css';
import { navigate } from '@reach/router';
import 'react-confirm-alert/src/react-confirm-alert.css';

const WinnersCircle = (props) => {
    const [playerScores, setPlayerScores] = useState([ 
        {
            name: props.Player1, 
            score: props.player1Score 
        },
        {
            name: props.Player2, 
            score: props.player2Score 
        },
        {
            name: props.Player3, 
            score: props.player3Score 
        },
        {
            name: props.Player4, 
            score: props.player4Score 
        },
        {
            name: props.Player5, 
            score: props.player5Score 
        },
        {
            name: props.Player6, 
            score: props.player6Score 
        }
    ]);

    const rank = playerScores.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

    const startNewGame = () => {
        props.resetGame();
        navigate("/categories");
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log("TIMEOUT");
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <>
            <h1 className="gameTitle5">Drunken Genius</h1>
            <div>
                <div className="mainResultsContainer">
                    <div className="resultsMain">
                        <div>
                            <div className="playerPlacingContainer">
                                <h1 className="winnersCircleText1a" style={{ color: "#FFD700" }}> 1st </h1>
                                <h1 className="winnersCircleText1" style={{ color: "white" }}>{rank[0].name}</h1>
                                <h1 className="winnersCircleText1" style={{ color: "green", marginLeft: "20px" }}>${rank[0].score}</h1>
                            </div>
                            {rank[1].name ?
                                <div className="playerPlacingContainer">
                                    <h1 className="winnersCircleText2a" style={{ color: "#C0C0C0" }}> 2nd </h1>
                                    <h1 className="winnersCircleText2" style={{ color: "white" }}>{rank[1].name}</h1>
                                    <h1 className="winnersCircleText2" style={{ color: "green" }}>${rank[1].score}</h1>
                                </div>
                                : null
                            }
                            {rank[2].name ?
                                <div className="playerPlacingContainer">
                                    <h1 className="winnersCircleText3a" style={{ color: "#CD7F32" }}> 3rd </h1>
                                    <h1 className="winnersCircleText3" style={{ color: "white" }}>{rank[2].name}</h1>
                                    <h1 className="winnersCircleText3" style={{ color: "green" }}>${rank[2].score}</h1>
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
                <div className="bottomDisplay">
                    <button onClick={startNewGame} id="newGameButton">Start a new Game</button>
                </div>
            </div>
        </>
    )
}

export default WinnersCircle
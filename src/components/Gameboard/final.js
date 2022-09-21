import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Link, navigate } from '@reach/router';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import Timer2 from '../../helpers/timer2';

const FinalQuestion = (props) => {
    const [Player1Wager, setPlayer1Wager] = useState(0);
    const [Player2Wager, setPlayer2Wager] = useState(0);
    const [Player3Wager, setPlayer3Wager] = useState(0);
    const [Player4Wager, setPlayer4Wager] = useState(0);
    const [Player5Wager, setPlayer5Wager] = useState(0);
    const [Player6Wager, setPlayer6Wager] = useState(0);
    const [finalIsAnswered, setFinalIsAnswered] = useState(false);
    
    const disabledStyle = {
        backgroundColor: 'gray'
    }

    const rightAnswerStyle = {
        backgroundColor: 'green',
    }

    const wrongAnswerStyle = {
        backgroundColor: 'red',
    }

    const onChangeHandler = (e) => {
        if (e.target.name === "player1") {
            setPlayer1Wager(e.target.value);
        }
        if (e.target.name === "player2") {
            setPlayer2Wager(e.target.value);
        }
        if (e.target.name === "player3") {
            setPlayer3Wager(e.target.value);
        }
        if (e.target.name === "player4") {
            setPlayer4Wager(e.target.value);
        }
        if (e.target.name === "player5") {
            setPlayer5Wager(e.target.value);
        }
        if (e.target.name === "player6") {
            setPlayer6Wager(e.target.value);
        }

        e.preventDefault();

    }

    const [finalQ, setFinalQ] = useState([props.finalQ]);

    const getButtonStyle = (e, id, isCorrect) => {     
        if (isCorrect) {
            document.getElementById(`${id}`).className="rightAnswerButton"
            e.target.style = {rightAnswerStyle}
        } else if (!isCorrect) {
            document.getElementById(`${id}`).className="wrongAnswerButton"
            e.target.style = {wrongAnswerStyle}
        }      
    };

    const startNewGame = () => {
        if (finalIsAnswered) {
            navigate("/results");
        } else {
            return;
        }
    }

    const playerBets = () => {
        confirmAlert({ 
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <form id="wagerForm">
                            <h1 className="wagerFormTitle">
                                Player Wagers
                            </h1>
                            {props.player1Score > 0 ?
                                <div className="wagerFormInnerContainer">
                                    <div className="wagerInputLabel">
                                        <label htmlFor="contestant1" className="playerInputLabel1">{props.Player1}:</label>
                                        <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player1" type='number'></input> 
                                        <h3 style={{ marginLeft: "20px", color: "red" }}> max </h3>
                                        <h3 style={{ marginLeft: "20px" }}>(</h3>
                                        <h3 style={{ marginLeft: "20px", color: "green" }}>${props.player1Score}</h3>
                                        <h3 style={{ marginLeft: "20px" }}>)</h3>
                                    </div>
                                </div>
                                : null
                            }
                            {props.player2Score > 0 ?
                                <div className="wagerFormInnerContainer">
                                    <div className="wagerInputLabel">
                                        <label htmlFor="contestant2" className="playerInputLabel1">{props.Player2}:</label>
                                        <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player2" type='number'></input> 
                                        <h3 style={{ marginLeft: "20px", color: "red" }}> max </h3>
                                        <h3 style={{ marginLeft: "20px" }}>(</h3>
                                        <h3 style={{ marginLeft: "20px", color: "green" }}>${props.player2Score}</h3>
                                        <h3 style={{ marginLeft: "20px" }}>)</h3>
                                    </div>  
                                </div>
                                : null
                            }
                            {props.player3Score > 0 ?
                                <div className="wagerFormInnerContainer">
                                    <div className="wagerInputLabel">
                                        <label htmlFor="contestant3" className="playerInputLabel3">{props.Player3}:</label>
                                        <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player3" type='number'></input> 
                                        <h3 style={{ marginLeft: "20px", color: "red" }}> max </h3>
                                        <h3 style={{ marginLeft: "20px" }}>(</h3>
                                        <h3 style={{ marginLeft: "20px", color: "green" }}>${props.player3Score}</h3>
                                        <h3 style={{ marginLeft: "20px" }}>)</h3>
                                    </div>  
                                </div>
                                : null
                            }
                            {props.player4Score > 0 ?
                                <div className="wagerFormInnerContainer">
                                    <div className="wagerInputLabel">
                                        <label htmlFor="contestant4" className="playerInputLabel1">{props.Player4}:</label>
                                        <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player4" type='number'></input> 
                                        <h3 style={{ marginLeft: "20px", color: "red" }}> max </h3>
                                        <h3 style={{ marginLeft: "20px" }}>(</h3>
                                        <h3 style={{ marginLeft: "20px", color: "green" }}>${props.player4Score}</h3>
                                        <h3 style={{ marginLeft: "20px" }}>)</h3>
                                    </div>  
                                </div>
                                : null
                            }
                            {props.player5Score > 0 ?
                                <div className="wagerFormInnerContainer">
                                    <div className="wagerInputLabel">
                                        <label htmlFor="contestant3" className="playerInputLabel4">{props.Player5}:</label>
                                        <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player5" type='number'></input> 
                                        <h3 style={{ marginLeft: "20px", color: "red" }}> max </h3>
                                        <h3 style={{ marginLeft: "20px" }}>(</h3>
                                        <h3 style={{ marginLeft: "20px", color: "green" }}>${props.player5Score}</h3>
                                        <h3 style={{ marginLeft: "20px" }}>)</h3>
                                    </div>  
                                </div>
                                : null
                            }
                            {props.player5Score > 0 ?
                                <div className="wagerFormInnerContainer">
                                    <div className="wagerInputLabel">
                                        <label htmlFor="contestant4" className="playerInputLabel5">{props.Player6}:</label>
                                        <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player6" type='number'></input> 
                                        <h3 style={{ marginLeft: "20px", color: "red" }}> max </h3>
                                        <h3 style={{ marginLeft: "20px" }}>(</h3>
                                        <h3 style={{ marginLeft: "20px", color: "green" }}>${props.player6Score}</h3>
                                        <h3 style={{ marginLeft: "20px" }}>)</h3>
                                    </div>  
                                </div>
                                : null
                            }
                            
                            <div className="wagerModalButtonHolder">
                                <button 
                                    type="submit" 
                                    id="nextButton2" 
                                    onClick={(e) => onClose()}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                );
            }
        })
    };

    useEffect(() => {
        const timer = setTimeout(() => {
          playerBets();
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

      const onShowAnswer = (answer) => {
        setFinalIsAnswered(true);
        confirmAlert({ 
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <div id="answerHeader">
                            <h3 className="answerLabel">ANSWER:</h3>
                            <h1 className="answerText">{answer}</h1>
                        </div>
                        <div>
                            <h3 id="whoGotItContainer">Who EARNED points? </h3>
                        </div>
                        <span id="answerBody">
                            <div className="playerButtonContainer">
                                {props.player1Score > 0 ?    
                                    <button 
                                        id="P1D"  
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(1, Player1Wager, "add");
                                            getButtonStyle(e, "P1D", true);
                                        }}
                                    >  
                                        {props.Player1}
                                    </button>
                                    : null
                                }
                                {props.player2Score > 0 ? 
                                    <button 
                                        id="P2D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(2, Player2Wager, "add");
                                            getButtonStyle(e, "P2D", true);
                                        }}
                                    >  
                                        {props.Player2}
                                    </button>
                                    : null
                                }
                                {props.player3Score > 0 ? 
                                    <button 
                                        id="P3D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(3, Player3Wager, "add");
                                            getButtonStyle(e, "P3D", true);
                                        }}
                                    >  
                                        {props.Player3}
                                    </button>
                                    : null
                                }
                                {props.player4Score > 0 ? 
                                    <button 
                                        id="P4D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(4, Player4Wager, "add");
                                            getButtonStyle(e, "P4D", true);
                                        }}
                                    >  
                                        {props.Player4}
                                    </button>
                                    : null
                                }
                                {props.player5Score > 0 ? 
                                    <button 
                                        id="P5D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(5, Player5Wager, "add");
                                            getButtonStyle(e, "P5D", true);
                                        }}
                                    >  
                                        {props.Player5}
                                    </button>
                                    : null
                                }
                                {props.player6Score > 0 ? 
                                    <button 
                                        id="P6D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(6, Player6Wager, "add");
                                            getButtonStyle(e, "P6D", true);
                                        }}
                                    >  
                                        {props.Player6}
                                    </button>
                                    : null
                                }
                            </div>
                        </span>
                        <div>
                            <h3 id="whoGotItContainer">Who LOST points? </h3>
                        </div>
                        <span id="answerBody">
                            <div className="playerButtonContainer">
                                {props.player1Score > 0 ? 
                                    <button 
                                        id="P7D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(1, Player1Wager, "subtract");
                                            getButtonStyle(e, "P7D", false);
                                        }}
                                    >  
                                        {props.Player1}
                                    </button>
                                    : null
                                }
                                {props.player2Score > 0 ? 
                                    <button 
                                        id="P8D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(2, Player2Wager, "subtract");
                                            getButtonStyle(e, "P8D", false);
                                        }}
                                    >  
                                        {props.Player2}
                                    </button>
                                    : null
                                }
                                {props.player3Score > 0 ? 
                                    <button 
                                        id="P9D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(3, Player3Wager, "subtract");
                                            getButtonStyle(e, "P9D", false);
                                        }}
                                    >  
                                        {props.Player3}
                                    </button>
                                    : null
                                }
                                {props.player4Score > 0 ? 
                                    <button 
                                        id="P10D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(4, Player4Wager, "subtract");
                                            getButtonStyle(e, "P10D", false);
                                        }}
                                    >  
                                        {props.Player4}
                                    </button>
                                    : null
                                }
                                {props.player5Score > 0 ? 
                                    <button 
                                        id="P11D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(5, Player5Wager, "subtract");
                                            getButtonStyle(e, "P11D", true);
                                        }}
                                    >  
                                        {props.Player5}
                                    </button>
                                    : null
                                }
                                {props.player6Score > 0 ? 
                                    <button 
                                        id="P12D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(6, Player6Wager, "subtract");
                                            getButtonStyle(e, "P12D", true);
                                        }}
                                    >  
                                        {props.Player6}
                                    </button>
                                    : null
                                }
                            </div>
                        </span>
                        <div id="answerFooter">
                            <h2 onClick={() => onClose()}>
                                Click to Continue
                            </h2>
                        </div>
                    </div>
                );
            },
        })
    };

    const onClickHandler = (e, question, answer) => {
        confirmAlert({ 
            customUI: () => {
                return (
                    <div className='custom-ui'>
                        <div className="timerClock">
                            <Timer2/>
                        </div>
                        <h1 className="questionPopup">{question}</h1>
                        <button id="showAnswerButton" onClick={(e) => onShowAnswer(answer)}>Show Answer</button>
                        <span id="answerReveal"><h3 id="answerReveal">Show Answer </h3></span>
                    </div>
                );
            }
        })
    };

    return(
        <>
            <h1 className="gameTitle5">Drunken Genius</h1>
            <div>
                <div className="gameBoardMain3">
                    {finalQ.map((c, index) => {
                        return(
                            <div key={index}className="FinalMain">
                                <div className="FinalCategory">
                                    <h5 onClick={(e) => onClickHandler(e, c.question, c.answer)} className="FinalCategoryText">{c.category}</h5>
                                </div>
                            </div>                        
                        )
                    })}
                </div>
                {finalIsAnswered ? 
                    <div className="bottomDisplay">
                        <button onClick={startNewGame} id="newGameButton">Results</button>
                    </div>
                    :
                    <div className="bottomDisplay">
                        <button id="invisibleButton"></button>
                    </div>
                }
            </div>
        </>
    )
}

export default FinalQuestion
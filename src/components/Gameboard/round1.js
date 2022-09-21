import React, { useState } from 'react';
import '../../App.css';
import q1 from '../../public/images/1drink.png';
import q2 from '../../public/images/2drinks.png';
import q3 from '../../public/images/3drinks.png';
import q4 from '../../public/images/4drinks.png';
import q5 from '../../public/images/1shot.png';
import { Link } from '@reach/router';
import Timer from '../../helpers/timer1';
import checkmark from '../../public/images/checkmark.png';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';


const GameBoard = (props) => {
    const [cat1, setCat1] = useState([props.cat1]);
    const [cat2, setCat2] = useState([props.cat2]);
    const [cat3, setCat3] = useState([props.cat3]);
    const [cat4, setCat4] = useState([props.cat4]);
    const [cat5, setCat5] = useState([props.cat5]);
    const Player1 = props.Player1;
    const Player2 = props.Player2;
    const Player3 = props.Player3;
    const Player4 = props.Player4;
    const Player5 = props.Player5;
    const Player6 = props.Player6;
    
    const style1 = {
        backgroundImage: `url(${q1})`,
        backgroundRepeat: 'no-repeat'
    }
    const style2 = {
        backgroundImage: `url(${q2})`,
        backgroundRepeat: 'no-repeat'
    }
    const style3 = {
        backgroundImage: `url(${q3})`,
        backgroundRepeat: 'no-repeat'
    }
    const style4 = {
        backgroundImage: `url(${q4})`,
        backgroundRepeat: 'no-repeat'
    }
    const style5 = {
        backgroundImage: `url(${q5})`,
        backgroundRepeat: 'no-repeat'
    }

    const style6 = {
        backgroundImage: `url(${checkmark})`,
        backgroundRepeat: 'none'
    }

    const disabledStyle = {
        backgroundColor: 'gray'
    }

    const rightAnswerStyle = {
        backgroundColor: 'green',
    }

    const wrongAnswerStyle = {
        backgroundColor: 'red',
    }

    const getButtonStyle = (e, id, isCorrect) => {     
        if (isCorrect) {
            document.getElementById(`${id}`).className="rightAnswerButton"
            e.target.style = {rightAnswerStyle}
        } else if (!isCorrect) {
            document.getElementById(`${id}`).className="wrongAnswerButton"
            e.target.style = {wrongAnswerStyle}
        }      
    };

      const onShowAnswer = (answer, points) => {
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
                                {Player1 ? 
                                    <button 
                                        id="P1D"  
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(1, points, "add");
                                            getButtonStyle(e, "P1D", true);
                                        }}
                                    >  
                                        {Player1}
                                    </button>
                                    : null
                                }
                                {Player2 ? 
                                    <button 
                                        id="P2D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(2, points, "add");
                                            getButtonStyle(e, "P2D", true);
                                        }}
                                    >  
                                        {Player2}
                                    </button>
                                    : null
                                }
                                {Player3 ? 
                                    <button 
                                        id="P3D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(3, points, "add");
                                            getButtonStyle(e, "P3D", true);
                                        }}
                                    >  
                                        {Player3}
                                    </button>
                                    : null
                                }
                                {Player4 ? 
                                    <button 
                                        id="P4D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(4, points, "add");
                                            getButtonStyle(e, "P4D", true);
                                        }}
                                    >  
                                        {Player4}
                                    </button>
                                    : null
                                }
                                {Player5 ? 
                                    <button 
                                        id="P5D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(5, points, "add");
                                            getButtonStyle(e, "P5D", true);
                                        }}
                                    >  
                                        {Player5}
                                    </button>
                                    : null
                                }
                                {Player6 ? 
                                    <button 
                                        id="P6D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(6, points, "add");
                                            getButtonStyle(e, "P6D", true);
                                        }}
                                    >  
                                        {Player6}
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
                                {Player1 ? 
                                    <button 
                                        id="P7D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(1, points, "subtract");
                                            getButtonStyle(e, "P7D", false);
                                        }}
                                    >  
                                        {Player1}
                                    </button>
                                    : null
                                }
                                {Player2 ? 
                                    <button 
                                        id="P8D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(2, points, "subtract");
                                            getButtonStyle(e, "P8D", false);
                                        }}
                                    >  
                                        {Player2}
                                    </button>
                                    : null
                                }
                                {Player3 ? 
                                    <button 
                                        id="P9D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(3, points, "subtract");
                                            getButtonStyle(e, "P9D", false);
                                        }}
                                    >  
                                        {Player3}
                                    </button>
                                    : null
                                }
                                {Player4 ? 
                                    <button 
                                        id="P10D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(4, points, "subtract");
                                            getButtonStyle(e, "P10D", false);
                                        }}
                                    >  
                                        {Player4}
                                    </button>
                                    : null
                                }
                                {Player5 ? 
                                    <button 
                                        id="P11D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(5, points, "subtract");
                                            getButtonStyle(e, "P11D", false);
                                        }}
                                    >  
                                        {Player5}
                                    </button>
                                    : null
                                }
                                {Player6 ? 
                                    <button 
                                        id="P12D" 
                                        className="disabledButton"
                                        style={disabledStyle}
                                        onClick={(e) => {
                                            props.onAdjustScore(6, points, "subtract");
                                            getButtonStyle(e, "P12D", false);
                                        }}
                                    >  
                                        {Player6}
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

    const onClickHandler = (e, question, answer, cN, points) => {
        document.getElementById(`${cN}`).className="answered"
        e.target.style = {style6}
        confirmAlert({ 
            customUI: () => {
                return (
                    <div className='custom-ui'>
                        <div className="timerClock">
                            <Timer/>
                        </div>
                        <h1 className="questionPopup">{question}</h1>
                        <button 
                            id="showAnswerButton" 
                            onClick={(e) => onShowAnswer(answer, points)} 
                        >
                            Show Answer
                        </button>
                    </div>
                );
            }
        })
    };

    return(
        <>
            <h1 className="gameTitle4">Drunken Genius</h1>
            <div>
                <div className="gameBoardMain">
                    <div className="drinkTable">
                        <div className="drinkMultiplier"></div>
                        <h1 className="drinkMultiplier"> X100 </h1>
                        <h1 className="drinkMultiplier"> X200 </h1>
                        <h1 className="drinkMultiplier"> X300 </h1>
                        <h1 className="drinkMultiplier"> X400 </h1>
                        <h1 className="drinkMultiplier"> X500 </h1>
                    </div>
                    {cat1.map((c, index) => {
                        return(
                            <div key={index}className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q1" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q1", 100)}></div>
                                    <div id="Q2" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q2", 200)}></div>
                                    <div id="Q3" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q3", 300)}></div>
                                    <div id="Q4" className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q4", 400)}></div>
                                    <div id="Q5"className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q5", 500)}></div>
                                </div>  
                            </div>                        
                        )
                    })}
                    {cat2.map((c, index) => {
                        return(
                            <div key={index} className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q6" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q6", 100)}></div>
                                    <div id="Q7" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q7", 200)}></div>
                                    <div id="Q8" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q8", 300)}></div>
                                    <div id="Q9" className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q9", 400)}></div>
                                    <div id="Q10"className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q10", 500)}></div>
                                </div>  
                            </div>                        
                        )
                    })}
                    {cat3.map((c, index) => {
                        return(
                            <div key={index} className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q11" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q11", 100)}></div>
                                    <div id="Q12" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q12", 200)}></div>
                                    <div id="Q13" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q13", 300)}></div>
                                    <div id="Q14" className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q14", 400)}></div>
                                    <div id="Q15"className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q15", 500)}></div>
                                </div>   
                            </div>                        
                        )
                    })}
                    {cat4.map((c, index) => {
                        return(
                            <div key={index} className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q16" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q16", 100)}></div>
                                    <div id="Q17" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q17", 200)}></div>
                                    <div id="Q18" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q18", 300)}></div>
                                    <div id="Q19" className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q19", 400)}></div>
                                    <div id="Q20"className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q20", 500)}></div>
                                </div>   
                            </div>                        
                        )
                    })}
                    {cat5.map((c, index) => {
                        return(
                            <div key={index} className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q21" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q21", 100)}></div>
                                    <div id="Q22" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q22", 200)}></div>
                                    <div id="Q23" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q23", 300)}></div>
                                    <div id="Q24" className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q24", 400)}></div>
                                    <div id="Q25"className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q25", 500)}></div>
                                </div> 
                            </div>                        
                        )
                    })}
                </div>
                <div className="bottomDisplay">
                    <button id="game2Button"><Link className="linkText" id="game2Path" to="/game2">Next Round</Link></button>
                </div>
            </div>
        </>
    )
}

export default GameBoard;
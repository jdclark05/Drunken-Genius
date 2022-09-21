import { useState } from 'react';
import '../../App.css';
import q1 from '../../public/images/2drinksb.png';
import q2 from '../../public/images/4drinksb.png';
import q3 from '../../public/images/6drinks.png';
import q4 from '../../public/images/8drinks.png';
import q5 from '../../public/images/2shots.png';
import checkmark from '../../public/images/checkmark.png';
import Timer from '../../helpers/timer1';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import { navigate} from '@reach/router';

const GameBoard2 = (props) => {
    const [cat6, setCat6] = useState([props.cat6]);
    const [cat7, setCat7] = useState([props.cat7]);
    const [cat8, setCat8] = useState([props.cat8]);
    const [cat9, setCat9] = useState([props.cat9]);
    const [cat10, setCat10] = useState([props.cat10]);
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
        opacity: '0.7',
        backgroundRepeat: 'no-repeat',
        pointerEvents: 'none',
        hover: 'false'
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

    const navigateToFinal = () => {
        if (props.player1Score > 0 || props.player2Score > 0 || props.player3Score > 0 || props.player4Score > 0 || props.player5Score > 0 || props.player6Score > 0) {
            navigate("/final");
        } else {
            navigate("/results");
        }
    }

    return(
        <>
            <h1 className="gameTitle4">Drunken Genius</h1>
            <div>
                <div className="gameBoardMain">
                    <div className="drinkTable">
                        <div className="drinkMultiplier"></div>
                        <h1 className="drinkMultiplier"> X200 </h1>
                        <h1 className="drinkMultiplier"> X400 </h1>
                        <h1 className="drinkMultiplier"> X600 </h1>
                        <h1 className="drinkMultiplier"> X800 </h1>
                        <h1 className="drinkMultiplier"> X1000 </h1>
                    </div>
                    {cat6.map((c, index) => {
                        return(
                            <div key={index}className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q26" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q26", 200)}></div>
                                    <div id="Q27" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q27", 400)}></div>
                                    <div id="Q28" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q28", 600)}></div>
                                    <div id="Q29"className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q29", 800)}></div>
                                    <div id="Q30" className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q30", 1000)}></div>
                                </div>  
                            </div>                        
                        )
                    })}
                    {cat7.map((c, index) => {
                        return(
                            <div key={index} className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q31" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q31", 200)}></div>
                                    <div id="Q32" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q32", 400)}></div>
                                    <div id="Q33" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q33", 600)}></div>
                                    <div id="Q34" className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q34", 800)}></div>
                                    <div id="Q35" className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q35", 1000)}></div>
                                </div>  
                            </div>                        
                        )
                    })}
                    {cat8.map((c, index) => {
                        return(
                            <div key={index} className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q36" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q36", 200)}></div>
                                    <div id="Q37" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q37", 400)}></div>
                                    <div id="Q38" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q38", 600)}></div>
                                    <div id="Q39" className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q39", 800)}></div>
                                    <div id="Q40" className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q40", 1000)}></div>
                                </div>  
                            </div>                        
                        )
                    })}
                    {cat9.map((c, index) => {
                        return(
                            <div key={index} className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q41" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q41", 200)}></div>
                                    <div id="Q42" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q42", 400)}></div>
                                    <div id="Q43" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q43", 600)}></div>
                                    <div id="Q44" className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q44", 800)}></div>
                                    <div id="Q45" className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q45", 1000)}></div>
                                </div>  
                            </div>                        
                        )
                    })}
                    {cat10.map((c, index) => {
                        return(
                            <div key={index} className="categoryColumn">
                                <div className="categoryTitle">
                                    <h5 className="categoryTitleText">{c.category}</h5>
                                </div>
                                <div className="categoryQuestions">
                                    <div id="Q46" className="Q1" style={style1} onClick={(e) => onClickHandler(e, c.question1, c.answer1, "Q46", 200)}></div>
                                    <div id="Q47" className="Q1" style={style2} onClick={(e) => onClickHandler(e, c.question2, c.answer2, "Q47", 400)}></div>
                                    <div id="Q48" className="Q1" style={style3} onClick={(e) => onClickHandler(e, c.question3, c.answer3, "Q48", 600)}></div>
                                    <div id="Q49" className="Q1" style={style4} onClick={(e) => onClickHandler(e, c.question4, c.answer4, "Q49", 800)}></div>
                                    <div id="Q50" className="Q1" style={style5} onClick={(e) => onClickHandler(e, c.question5, c.answer5, "Q50", 1000)}></div>
                                </div>
                            </div>                        
                        )
                    })}
                </div>
                <div className="bottomDisplay">
                    <button id="game2Button" onClick={() => navigateToFinal()}>Continue to Final Round</button>
                </div>
            </div>
        </>
    )
}

export default GameBoard2;
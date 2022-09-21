import { useState } from 'react';
import '../../App.css';
import { Link, navigate } from '@reach/router';
import { confirmAlert } from 'react-confirm-alert';

const Contestants = (props) => {
    const [form, setForm] = useState({
        player1: "",
        player2: "",
        player3: "",
        player4: "",
        player5: "",
        player6: ""
    });

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (form.player1 !== "") {
            localStorage.setItem('Player1',`${form.player1}`);
            localStorage.setItem('Player2',`${form.player2}`);
            localStorage.setItem('Player3',`${form.player3}`);
            localStorage.setItem('Player4',`${form.player4}`);
            localStorage.setItem('Player5',`${form.player5}`);
            localStorage.setItem('Player6',`${form.player6}`);
            props.onRender();
            startGame();
        } else {
            confirmAlert({ 
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <h1 className="questionPopup">Must create at least 1 player to proceed</h1>
                            <button 
                                id="showAnswerButton" 
                                onClick={(e) => onClose()} 
                            >
                                Close
                            </button>
                        </div>
                    );
                }
            })
        }
    }

    const startGame = () => {
        navigate('/game1')
    }

    return(
        <>
            <h1 className="gameTitle3">Drunken Genius</h1>
            <div className="gameBoardMain2">
                <div className="contestantEntries">
                    <form onSubmit={onSubmitHandler} style={{ width: "800px" }}>
                        <div className="cContainer">
                            <div style={{ marginLeft: "-200px"}}>
                            <label htmlFor="contestant1" className="playerInputLabel1">Player 1:</label>
                                <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player1" type='text'></input> 
                            </div>
                        </div>
                        <div className="cContainer">
                            <div style={{ marginLeft: "50px" }}>
                                <label htmlFor="contestant2" className="playerInputLabel2">Player 2:</label>
                                <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player2" type='text'></input> 
                            </div>  
                        </div>
                        <div className="cContainer">
                            <div style={{ marginLeft: "-200px"}}>
                                <label htmlFor="contestant3" className="playerInputLabel1">Player 3:</label>
                                <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player3" type='text'></input>   
                            </div>
                        </div>
                        <div className="cContainer">
                            <div style={{ marginLeft: "50px" }}>
                                <label htmlFor="contestant4" className="playerInputLabel2">Player 4:</label>
                                <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player4" type='text'></input>   
                            </div>
                        </div>
                        <div className="cContainer">
                            <div style={{ marginLeft: "-200px"}}>
                                <label htmlFor="contestant5" className="playerInputLabel1">Player 5:</label>
                                <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player5" type='text'></input>   
                            </div>
                        </div>
                        <div className="cContainer">
                            <div style={{ marginLeft: "50px" }}>
                                <label htmlFor="contestant6" className="playerInputLabel2">Player 6:</label>
                                <input onChange={ (e) => onChangeHandler(e, e.target.value)} className="nameInput" name="player6" type='text'></input>   
                            </div>
                        </div>

                        <div className="buttonHolder2">
                            <button id="nextButton"><Link className="linkText" id="linkText" to="/categories" activeStyle={{ color: '#fff'}}>Back</Link></button>
                            <button type="submit" id="nextButton2"><h4 id="submitText">Submit</h4></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contestants;
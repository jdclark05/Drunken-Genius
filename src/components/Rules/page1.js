import React from 'react';
import '../../App.css';
import { Link } from '@reach/router';

const Rules = () => {


    return (
        <>
            <h1 className="gameTitle1">Drunken Genius</h1>
            <div className="rulesMain">
                <div className="rulesHeader">
                    <h1 className="rulesTitle">Rules</h1>
                </div>
                <div className="rulesContainer">
                    <p>*** Drink Responsibly! ***</p>
                    <p>-- Players will set all drinking rules</p>
                    <p>-- A game can have as many as 6 people playing at once</p>
                    <p>-- 1 player should be selected as a moderator</p>
                    <p>-- Each player should have a pen and paper on which to write their answers</p>
                    <p>-- Each question has a 20 second time limit</p>
                    <p>-- Players accumulate points by answering questions correctly</p>
                </div>
                <div className="buttonHolder">
                    <button id="nextButton"><Link className="linkText" id="linkText" to="/" activeStyle={{ color: '#fff'}}>Back</Link></button>
                    <button id="nextButton2"><Link className="linkText" id="linkText2" to="/rules2" activeStyle={{ color: '#fff'}}>Next</Link></button>
                </div>
            </div>
        </>
    );
}


export default Rules;
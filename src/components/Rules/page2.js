import React from 'react';
import '../../App.css';
import { Link } from '@reach/router';

const Rules2 = () => {


    return (
        <>
            <h1 className="gameTitle1">Drunken Genius</h1>
            <div className="rulesMain">
                <div className="rulesHeader">
                    <h1 className="rulesTitle">Rules</h1>
                </div>
                <div className="rulesContainer">
                    <p>-- After each question, the moderator will be prompted to adjust player scores.</p>
                    <p>-- Round 2 will continue the same as round 1, but point totals will be increased.</p>
                    <p>-- At the end of round two, participants will be given a chance to wager an amount within the limits of their point totals.</p>
                    <p>-- If a participant has 0 or negative points, they cannot proceed to the final round.</p>
                    <p>-- In the final round, players will have 35 seconds to answer the question.</p>
                </div>
                <div className="buttonHolder">
                    <button id="nextButton"><Link className="linkText" id="linkText" to="/rules1" activeStyle={{ color: '#fff'}}>Back</Link></button>
                    <button id="nextButton2"><Link className="linkText" id="linkText2" to="/categories" activeStyle={{ color: '#fff'}}>Next</Link></button>
                </div>
            </div>
        </>
    );
}


export default Rules2;
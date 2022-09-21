import React from 'react';
import '../../App.css';
import { Link, navigate } from '@reach/router';
import logo from '../../public/images/drunken-genius-logo.png';

const IntroPage = () => {

    const style1 = {
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover', 
        height: '600px',
        width: '900px',
        paddingTop: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
        marginLeft: '-30px',
    }


    return (
        <div className="rulesMain2" style={style1}>
            <div className="IntroContainer">
                <h1 className="welcomeText">Drunken Genius</h1>
                <p className="welcomeText2" >the trivia-based drinking game...</p>
            </div>
            <div className="buttonHolder4">
                <button id="nextButton4">
                    <Link className="linkText" id="linkText4" to="/rules1" navigate="/rules4">Start</Link>
                </button>
            </div>
        </div>
    );
}


export default IntroPage;
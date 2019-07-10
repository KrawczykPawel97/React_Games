import React from 'react';
import {Route} from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <div className={"footer"}>
            <h2>Footer</h2>
            <Route path={"/"} exact render={(props)=>{
                return(
                    <p>You are on the <span>home page</span></p>
                )
            }} />
            <Route path={"/memory"} exact render={(props)=>{
                return(
                    <p>You are on the <span>memory game</span></p>
                )
            }} />
            <Route path={"/hangman"} exact render={(props)=>{
                return(
                    <p>You are on the <span>hangman game</span></p>
                )
            }} />
            <Route path={"/ticTacToe"} exact render={(props)=>{
                return(
                    <p>You are on the <span>tic tac toe game</span></p>
                )
            }} />
        </div>
    )
};
export default Footer;
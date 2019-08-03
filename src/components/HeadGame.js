import React from 'react';
import {Route} from 'react-router-dom';

const HeadGame = () => {
    return(
        <div className={"headGame"}>
            <Route path={"/"} exact render={(props)=>{
                return(
                    <p className={"head"}>About me ..</p>
                )
            }} />
            <Route path={"/memory"} exact render={(props)=>{
                return(
                    <p className={"head"}>Memory Game</p>
                )
            }} />
            <Route path={"/hangman"} exact render={(props)=>{
                return(
                    <p className={"head"}>Hangman</p>
                )
            }} />
            <Route path={"/ticTacToe"} exact render={(props)=>{
                return(
                    <p className={"head"}>Tic Tac Toe</p>
                )
            }} />
            <Route path={"/ships"} exact render={(props)=>{
                return(
                    <p className={"head"}>Ships</p>
                )
            }} />
        </div>
    )
};
export default HeadGame;
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AboutMe from "./AboutMe";
import MemoryGame from "./MemoryGame";
import Hangman from "./Hangman";
import TicTacToe from "./TicTacToe";
import Ships from "./Ships";

const Footer = () => {
    return(
        <div className={"primary"}>

            <Switch>
                <Route path={"/"} exact component={AboutMe} />
                <Route path={"/memory"}  component={MemoryGame} />
                <Route path={"/hangman"}  component={Hangman} />
                <Route path={"/ticTacToe"} component={TicTacToe} />
                <Route path={"/ships"} component={Ships} />
            </Switch>

        </div>
    )
};
export default Footer;
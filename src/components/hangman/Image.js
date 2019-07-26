import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Button.css';
import hangman0 from "../../images/hangman0.jpg";
import hangman1 from "../../images/hangman1.jpg";
import hangman2 from "../../images/hangman2.jpg";
import hangman3 from "../../images/hangman3.jpg";
import hangman4 from "../../images/hangman4.jpg";
import hangman5 from "../../images/hangman5.jpg";
import hangman6 from "../../images/hangman6.jpg";
import hangman7 from "../../images/hangman7.jpg";
import hangman8 from "../../images/hangman8.jpg";
import hangman9 from "../../images/hangman9.jpg";
import hangman10 from "../../images/hangman10.jpg";

export default function Image(props) {
        const list = [
        {name: hangman0},
        {name: hangman1},
        {name: hangman2},
        {name: hangman3},
        {name: hangman4},
        {name: hangman5},
        {name: hangman6},
        {name: hangman7},
        {name: hangman8},
        {name: hangman9},
        {name: hangman10},
    ];
    return (
        <img src = {list[props.stepNumber].name}
             className="rounded mx-auto d-block img-thumbnail"
             alt="hangman"/>
        )
}
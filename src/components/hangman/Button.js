import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Button.css';

export default function Button (props) {
    return (
        <button id={props.id}
                type="button"
                className="btn btn-outline-primary "
                onClick={props.onClick}
        >
            {props.letter}
        </button>
    )

}

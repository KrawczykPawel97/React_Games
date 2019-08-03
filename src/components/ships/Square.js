import React from 'react'

export default function Square(props) {
    return (
        <button className="field"
                id={props.id}
                onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}
import React from 'react';
import '../../styles/Card.css';

const Card = (props) => {
    const {id, active, color} = props.card;

    if (active) {
        return (
            <div className={'game'}>
                <div className={`card`}
                     style={{backgroundColor: color}}
                     onClick={() => props.handleClick(id)}

                />

            </div>
        );
    } else {
        return (
            <div className={'game'}>
                <div className={`card`}
                     style={{backgroundColor: 'grey'}}
                     onClick={() => props.handleClick(id)}
                />
            </div>
        );

    }
};

export default Card
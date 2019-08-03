import React from 'react'

export default function AlertShips(props) {

    let title = (props.body > 0 && props.body < 2) ?
        'place the ship in four places\n' +
        '        (click first on the starting point and then on the final one)' :
        (props.body > 1 && props.body < 6) ?
        'place the ship in three places\n' +
        '        (click first on the starting point and then on the final one)' :
        (props.body > 5 && props.body < 12) ?
            'place the ship in two places' +
            '        (click first on the starting point and then on the final one)' :
            'place the ship in one places\n' +
            '        (click first on the starting point and then on the final one)';

    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{title}</strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            </button>
        </div>
    )
}
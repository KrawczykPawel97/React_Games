import React, { Component } from 'react';
import Square from './Square';

export default class BoardX extends Component {

    renderSquare(i, value){
        return <Square id = {i}
                       value={value}
        />
    }

    render() {
        const elements = ['X', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        const headBoard = [];
        let tableIndex = [];
        const items = [];
        for (const [index, value] of elements.entries()) {
            headBoard.push(this.renderSquare(index+1200, value));
        }
        for(let counter = 300; counter < 400; counter++) {
            tableIndex.push(counter);
        }
        for (const [index, value] of tableIndex.entries()) {
            for(let counter = 10 ; counter <110; counter+=10){
                if(index === counter-10)items.push(this.renderSquare(counter+1000, counter/10));
            }
            items.push(this.renderSquare(value, ''));
        }

        return (
            <div>
                <div className="row">
                    {headBoard}
                </div>
                {items}
            </div>
        )
    }
}
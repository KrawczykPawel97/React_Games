import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TicTacToe.css'
import React, { Component } from 'react'
import Board from '../components/ticTacToe/Board';
import Alert from "../components/Alert";

export default class Game extends Component {
    state = {
            playerX: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        };

    jumpTo(step){
        this.setState({
            stepNumber: step,
            playerX: (step%2)===0
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.playerX ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            playerX: !this.state.playerX,
            stepNumber: history.length
        });

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = `Winner is player: ` + winner;
        } else if(this.state.stepNumber === 9){
            status = `You are both winners;`;
        } else {
            status = 'Next Player is ' + (this.state.playerX ? 'X' : 'O');
        }

        const start = () => {
            this.jumpTo(0);
        };
        
        return (
            <React.Fragment>
                {(winner ||  this.state.stepNumber === 9)?
                    <Alert title = {'Well done!'}
                           body = {status}
                           onClick={() => {start()}}
                    />
                    :
                    <div className={"row justify-content-center"}>
                        <div className="game">
                            <div className="game-board">
                                <p id={"stats"}>{status}</p>
                                <Board onClick={(i) => this.handleClick(i)}
                                       squares={current.squares} />
                            </div>
                        </div>
                    </div>}
            </React.Fragment>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

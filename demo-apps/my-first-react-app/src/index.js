import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Renders a single button, with a value that is passed via a prop
class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => alert('clicked ' + this.props.value)}>
            {this.props.value}
            </button>
        );
    }
}

// Renders 9 squares to form our board
class Board extends React.Component {

    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        const status = "Next player: X";
        
        return ( 
            <div>
                <div>
                    <div className="status">{status}</div>
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// Renders the board
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{ }</div>
                    <ol>{ }</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
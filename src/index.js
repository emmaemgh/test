import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component { //class - is a function
  // What am I missing #4?
  constructor(props) {
    super(props)

  }
  render() {
    // What value should go in the TODO #2?
    // How do we handle events? #3?
    return (
      // After we made all those changes to Board, what's the story #8
      <button className="square" onClick={this.props.handleClick}>
        {this.props.val}
      </button>
    );
  }
}
//map render variable

class Board extends React.Component { // used to determine victory b/c contains all 9 squares within
  // Same thing, what am I missing here #5?
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick(i) {
    //copies the array into a cons
    const squares = this.state.squares.slice()

    //update the array
    if (this.state.xIsNext == true)
    {
      squares[i] = "X"
      //this.state.xIsNext = false // call state to re-render
    }
    else {
      squares[i] = "O"
      //this.state.xIsNext = true
    }
    var didWin = this.calculateWinner(squares)
    if (didWin) {
      var whoWon = this.state.xIsNext ? "X" : "O";

      alert("Congrats to " + whoWon)
    }

    this.setState({squares: squares, xIsNext: !this.state.xIsNext}) //to alternate X's and O's
  }

  calculateWinner(squares) {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],

    ]; // indexes of squares

    for (var i = 0; i < lines.length; i++) {
      var a = lines[i][0];
      var b = lines[i][1];
      var c = lines[i][2];
      if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
        return true;
      }
    }
    return false;

  }


  //state or prop - whether it changes and needs to rerender
  // Let's do something with i #1
  // Now how do we get the value from the board? #6
  // Fancy JS time, what else can be passed #7?
  renderSquare(i) {
    return <Square val={this.state.squares[i]} handleClick = {() => {this.handleClick(i)}}/>;

  }

  // What's something we're missing that we should definitely be defining? #9

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

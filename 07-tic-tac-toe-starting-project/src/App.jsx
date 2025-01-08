import {useState} from "react";
import GameBoard from "./components/GameBord";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  'X':'Player 1', 
  'O':'Player 2'
}
const initialGameBoard =[
  [null, null, null],
  [null, null, null], 
  [null, null, null]
];

function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if( gameTurns.length > 0 && gameTurns[0].player === 'X'){
      currentPlayer = 'O';
  }
  return currentPlayer;

}

function derivedGameBoard(gameTurns){
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for(const turn of gameTurns){
      const {square,player} = turn;
      const {row,cell} = square;
      gameBoard[row][cell] = player;
  }

  return gameBoard;
}

function derivedWinner(gameBoard,players){
  let winner = null;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
     winner = players[firstSquareSymbol];
    }

  }
  return winner;

}


function App() {

  const [players,setPlayers] = useState(PLAYERS);
  const [gameTurns,setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);
 const gameBoard = derivedGameBoard(gameTurns);
  const winner = derivedWinner(gameBoard,players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleActivePlayerChange(rowIndex,cellIndex) {
    setGameTurns((prevTurns)=>{
       const currentPlayer = derivedActivePlayer(prevTurns);
      const updtedTurns = [{
        player:currentPlayer,
       square: { row: rowIndex, cell: cellIndex }
      },...prevTurns];
      return updtedTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol,newName){
    setPlayers((prevPlayers)=>{
      return {
        ...prevPlayers,
        [symbol]:newName
      }
    });
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
        <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectPlayer={handleActivePlayerChange} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </menu>
    
  )
}

export default App

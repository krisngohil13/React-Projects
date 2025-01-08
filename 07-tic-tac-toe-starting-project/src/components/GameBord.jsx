


export default function GameBoard( {onSelectPlayer ,board}) {
   
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleClick(rowIndex,cellIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         newGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
    //         return newGameBoard;
    //     });
    //     onSelectPlayer();
    // }
    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                    {row.map((playerSymbol, cellIndex) => (
                        <li  key={cellIndex} >
                        <button onClick={()=>onSelectPlayer(rowIndex,cellIndex)} disabled={playerSymbol!== null}>{playerSymbol}</button>
                        </li>
                    ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
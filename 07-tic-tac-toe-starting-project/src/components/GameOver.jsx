export default function GameOver({ winner, onRestart }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>{winner} wins!</p>}
            {!winner && <p>It a draw!</p>}
            <p><button onClick={onRestart}>Restart</button></p>
        </div>
    );
}
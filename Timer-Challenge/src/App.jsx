import Player from './components/Player.jsx';
import TimerCard from './components/TimerCard.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerCard title="Challenge 1" time={1} />
        <TimerCard title="Challenge 2" time={5} />
        <TimerCard title="Challenge 3" time={10} />
        <TimerCard title="Challenge 4" time={15} />

      </div>
    </>
  );
}

export default App;

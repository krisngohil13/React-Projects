import { useState, useRef, useEffect } from 'react';
import ResultModal from './ResultModal';

export default function TimerCard({ title, time }) {
  const timer = useRef();
  const [result, setResult] = useState(null);
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(time * 1000);

 const isTimeActive = timeRemaining > 0 && timeRemaining < time * 1000;


 if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
 }

 function handleReset(){
  setTimeRemaining(time * 1000);
 }
  const handleStart = () => {
    timer.current = setInterval(()=>{
    setTimeRemaining((prevTime) => prevTime-10);
   },10);

  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current); // Clear interval to stop the timer
  };

  return (
    <>
      <ResultModal targetTime={time} result={result} ref={dialog} remainingTime={timeRemaining} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {time} second{time !== 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={isTimeActive ? handleStop : handleStart}>
            {isTimeActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={isTimeActive ? 'active' : undefined}>
          {isTimeActive ? 'Timer is Running' : 'Timer is Inactive'}
        </p>
      </section>
    </>
  );
}

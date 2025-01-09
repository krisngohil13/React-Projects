
import { useState,useRef } from 'react';

export default function TimerCard({title, time}) {

    const stopTimer = useRef();
    const [timeStart, setTimeStart] = useState(false);
    const [timeLeft, setTimeLeft] = useState(false);


    function handleStart(){
         stopTimer.current = setTimeout(() => {
            setTimeLeft(true);
        }, time * 1000);

        setTimeStart(true);
    }

    function handleStop(){
        clearTimeout(stopTimer.current);
    }

  return (
    <section className="challenge">
      <h2>{title}</h2>
        {timeLeft && <p>Time is out!</p>}
      <p className="challenge-time">
        {time} second{time > 1 ? 's' : ''}
      </p>
      <p>
      <button onClick={timeStart ? handleStop : handleStart}>{timeStart ? 'Stop' : 'Start'}  Challenge</button>
      </p>
      <p className={timeStart ? 'active' : undefined}>
        {timeStart ? 'Timer is Running' : 'Timer is Inactive'}
      </p>
    </section>
  );
}
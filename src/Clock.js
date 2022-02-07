import React, {useState, useEffect, useRef} from 'react';
import Toggle from './Toggle';

export default function Clock() {
    const timerRef = useRef();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log('componentdidamount');
        start();

        return () => {
            console.log('componentwillunamount');
            stop();
        };
    }, [])

    function start() {
        const id = setInterval(() => {
            setTime(new Date());
        },1000);
        timerRef.current = id;
        console.log(timerRef.current);
    }

    function stop() {
        clearInterval(timerRef.current);
    }
  return (
  <div style={{margin: '30px'}}>
      {time.toLocaleTimeString()}
      <Toggle start={start} stop={stop} />
  </div>
  );
}

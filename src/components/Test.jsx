// import React, { useState, useEffect } from 'react';
// import './Timer.css';

// function Test() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [laps, setLaps] = useState([]);

//   useEffect(() => {
//     let interval = null;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime(prev => prev + 10);
//       }, 10);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const handleStart = () => setIsRunning(true);
//   const handlePause = () => setIsRunning(false);
//   const handleReset = () => setTime(0);
//   const handleResetAll = () => {
//     setTime(0);
//     setIsRunning(false);
//     setLaps([]);
//   };
//   const handleLap = () => {
//     setLaps([...laps, time]);
//     setTime(0);
//   };

//   const formatTime = (t) => {
//     const minutes = Math.floor(t / 60000);
//     const seconds = Math.floor((t % 60000) / 1000);
//     const milliseconds = Math.floor((t % 1000) / 10);
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="timer-container">
//       <div className="timer-display">
//         <h1>{formatTime(time)}</h1>
//       </div>
//       <div className="timer-controls">
//         <button onClick={handleStart} disabled={isRunning}>Start</button>
//         <button onClick={handlePause} disabled={!isRunning}>Pause</button>
//         <button onClick={handleLap} disabled={!isRunning}>Lap</button>
//         <button onClick={handleReset}>Reset</button>
//         <button onClick={handleResetAll}>Reset All</button>
//       </div>
//       {laps.length > 0 && (
//         <div className="laps-container">
//           <h2>Lap Times</h2>
//           <ul>
//             {laps.map((lap, index) => (
//               <li key={index}>
//                 <span>Lap {index + 1}</span>
//                 <span>{formatTime(lap)}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="total-time">
//             Total: {formatTime(laps.reduce((acc, lap) => acc + lap, 0))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Test;




import React, { useState, useEffect } from 'react';
import './Timer.css';

function Test() {
  // 1. 初始化状态
  const [time, setTime] = useState(0);        // 当前计时（毫秒）
  const [isRunning, setIsRunning] = useState(false); // 是否在运行
  const [laps, setLaps] = useState([]);       // 存储单圈时间
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millis = ms % 1000;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millis.toString().padStart(3, '0')}`;
  };
  useEffect(() => {
    let id;
    if (isRunning) {
      id = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10)

    }
    return () => { clearInterval(id) }
  }, [isRunning])

  return (
    <div className="timer-container">
      <div className="timer-display">
        <h1>{formatTime(time)}</h1>
      </div>
      <button type='button' onClick={() => setIsRunning(prev => !prev)}>

        {isRunning ? 'pause' : 'start'}
      </button>
      <button type='button' disabled={!isRunning} onClick={() => {
        setLaps(prev => [...prev, time])
        setTime(0);
      }}>

        lap
      </button>

      <button type='button' onClick={() => {
        setTime(0);
        setIsRunning(false);
      }
      }>

        {'reset'}
      </button>
      <button type='button' onClick={() => {
        setTime(0);
        setLaps([]);
        setIsRunning(false);
      }
      }>

        {'resetAll'}
      </button>
      <div className='lap-display'>
        {laps.map((lap, index) => (
          <div key={index}>
            lap{index + 1}:{formatTime(lap)}
          </div>
        ))}
      </div>


    </div>
  );
}

export default Test;
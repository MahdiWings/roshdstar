import React, { useState, useEffect } from 'react';
import '../timer.css';

const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  let currentDigit = digit;
  let previousDigit = digit - 1;

  if (unit === 'hours') {
    if (currentDigit < 1) {
      currentDigit = "00";
    }
    if (previousDigit < 1) {
      previousDigit = "00";
    }
  } else {
    if (currentDigit < 10) {
      currentDigit = `0${currentDigit}`;
    }
    if (previousDigit < 0) { // اینجا را به 0 تغییر داده‌ام
      previousDigit = "00";
    } else if (previousDigit < 10) {
      previousDigit = `0${previousDigit}`;
    }
  }

  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className='flipUnitContainer'>
      <StaticCard position={'upperCard'} digit={currentDigit} />
      <StaticCard position={'lowerCard'} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

const CountdownTimer = ({ initialHours, initialMinutes }) => {
  // const initialMinutesAsNumber = parseInt(initialMinutes, 10);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(11);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(interval);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }

      if (minutes === 0 && seconds === 0) {
        setMinutes(11);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className={'flipClock'}>
      <FlipUnitContainer unit={'seconds'} digit={seconds} shuffle={false} />
      <span className='self-center font-bold text-4xl'>:</span>
      <FlipUnitContainer unit={'minutes'} digit={minutes} shuffle={false} />
      <span className='self-center font-bold text-4xl'>:</span>
      <FlipUnitContainer unit={'hours'} digit={hours} shuffle={false} />
    </div>
  );
};

export default CountdownTimer;

import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useState } from 'react';

function Congratulate() {
  const { width, height } = useWindowSize();

  const [isConfettiActive, setIsConfettiActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiActive(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
        {isConfettiActive && <Confetti width={width} height={height} numberOfPieces={200} /> 

    }
    </div>
  );
}

export default Congratulate;

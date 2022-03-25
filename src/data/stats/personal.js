import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    // const birthTime = new Date('1984-10-08');
    const deathTime = new Date('2065-10-08');
    setAge(((deathTime - Date.now()) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Years left to Carpe Diem',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Toronto, ON',
  },
];

export default data;

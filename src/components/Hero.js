import React, { useState, useEffect } from 'react';

export default function Hero() {
  const upperTextValues = [
    'Kodezi Auto-Generates',
    'Kodezi Auto-Corrects',
    'Kodezi Auto-Optimizing',
    'Kodezi Auto-Comments',
    'Kodezi Auto-DocString',
    'Kodezi Auto-Summirizes',
    'Kodezi Auto-Solve'
  ];

  const lowerTextValues = [
    'auto generates your code',
    'auto debug your code in seconds.',
    'auto optimize your code in seconds.',
    'auto comment your code in seconds.',
    'auto add DocString to your code in seconds.',
    'auto summirizes your code in seconds.',
    'auto solves your coding projects in seconds.'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % upperTextValues.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='my-10'>
      <div className='text-white flex mb-3 justify-center'>
        <p className='mx-2 text-6xl font-bold'>You Code,</p>
        <span className='text-6xl font-bold text-yellow-100'>{upperTextValues[currentIndex]}</span>
      </div>
      <div className='text-white flex my-2 justify-center'>
        <p className='mx-2 text-xl'>Let Kodezi </p>
        <span className='text-xl'>{lowerTextValues[currentIndex]}</span>
      </div>
      <div className='text-white flex justify-center my-2'>
        <p className='text-lg'>Kodezi is Grammarly for programmers.</p>
      </div>
      <div className='text-center my-10'>
        <button className='px-7 mb-5 font-bold py-4 bg-white rounded-full'>Use Kodezi</button>
        <div><a href="/" className='text-white underline'>Read code privacy</a></div>
      </div>
    </div>
  )
}

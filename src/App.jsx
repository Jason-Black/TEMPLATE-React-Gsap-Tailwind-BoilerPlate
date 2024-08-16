
import './App.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.letter', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.1 }
    );
  }, []);

  return (
    <div className="App">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-extrabold text-blue-600 hover:text-red-600 hover:scale-110 transform transition duration-300 ease-in-out">
          {Array.from("Hover Over Me!").map((letter, index) => (
            <span key={index} className="letter inline-block">{letter}</span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default App;
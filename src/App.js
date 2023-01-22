import { generateId, getNewExpirationTime } from './handlers/utilities';
import { AddThoughtForm } from './components/AddThoughtForm';
import { Thought } from './components/Thought';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((prev) => [...prev, thought]);
    return thoughts;
  };

  const removeThought = (thoughtID) => {
    setThoughts((thoughts) => 
      thoughts.filter((thought) => thought.id !== thoughtID)
    )
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

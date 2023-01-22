import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../handlers/utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = ({target}) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(text !== ''){
      const newThought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime()
      };
      setText("");
      props.addThought(newThought);            
    }
    
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text} 
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

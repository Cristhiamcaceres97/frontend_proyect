import React, { useState } from 'react';
import Typist from 'react-typist';

const LoremTypistContainer = () => {
  const [typingDone, setTypingDone] = useState(false);

  const handleTypingDone = () => {
    setTypingDone(true);
  };

  return (
    <div className={`containerBorder ${typingDone ? 'border-animation' : ''}`}>
      <Typist onTypingDone={handleTypingDone}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typist>
    </div>
  );
};

export default LoremTypistContainer;

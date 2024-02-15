import React, { useState } from 'react';

function Practice() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <p>You clicked the button {clicks} times.</p>
      <button onClick={() => setClicks(clicks + 1)}>Click me</button>
    </div>
  );
}

export default Practice;



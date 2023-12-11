import React, { useState } from 'react';

function Name() {
 const [name, setName] = useState('');
 const [namesList, setNamesList] = useState([]);

 const handleNameSubmit = (e) => {
  e.preventDefault();
  if (name.trim() !== '') {
   setNamesList([...namesList, name]);
   setName('');
  }
 };

 return (
  <div>
   <form onSubmit={handleNameSubmit}>
  <p>New person's name is {name || 'Marsha'}.</p>
  <input
  type= "text"
  value = {name}
  placeholder = "Marsha"
  onChange = {(e) => {
   const val = e.target.value;
   setName(val);
  }}
  />
  <button type="submit">Add Name</button>
  </form>
  <ul>
   {namesList.map((n, index) => (
    <li key={index}>{n}</li>
   ))}
  </ul>
</div>
);
 }

export default Name;
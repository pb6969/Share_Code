import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewCode() {
  
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  
  const handleSave = async (e) => {
    e.preventDefault(); 

    
    const response = await fetch('http://localhost:5000/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: code }), 
    });

    
    const result = await response.json();

    
    if (result.id) {
      navigate(`/${result.id}`);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSave}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />
        <br />
       
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

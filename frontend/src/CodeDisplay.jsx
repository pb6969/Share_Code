import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CodeDisplay() {
  const { id } = useParams();            
  const navigate = useNavigate();        

  const [code, setCode] = useState('');  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  
    useEffect(() => {
      fetch(`http://localhost:5000/${id}`)
        .then(res => res.json())
        .then(data => {
          if (data.value) setCode(data.value);
          else setError('Snippet not found');
          setLoading(false);
        })
        .catch(() => {
          setError('Failed to load snippet'); 
          setLoading(false);
        });
    }, [id]);

  
  const deleteSnippet = async () => {
    if (!window.confirm("Delete this snippet?")) return;

    try {
      const res = await fetch(`http://localhost:5000/${id}`, { method: 'DELETE' });
      if (res.ok) {
        alert("Deleted successfully");
        navigate('/');
      } else {
        alert("Failed to delete");
      }
    } catch {
      alert("Error deleting snippet");
    }
  };

  
  if (loading) return <div className="wrapper">Loading...</div>;
  if (error) return <div className="wrapper">{error}</div>;

  return (
    <div className="wrapper">
      <pre>{code}</pre>
      <button onClick={deleteSnippet}>Delete Snippet</button>
    </div>
  );
}

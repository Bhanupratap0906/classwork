import { useState, useEffect } from 'react';
import './App.css';
import FooterClock from './Footerclock';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results.slice(0, 6)); 
        setInfo(data.info);
      });
  }, [page]);

  const handleNext = () => {
    if (info.next) setPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (info.prev) setPage(prev => prev - 1);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Rick and Morty Encyclopedia</h1>

      <div className="page">
        {characters.map(char => (
          <a
            key={char.id}
            className="box"
            href={`/character.html?id=${char.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={char.image} alt={char.name} width="100%" style={{ borderRadius: '8px' }} />
            <h3>{char.name}</h3>
            <p>{char.species}</p>
            <p>Status: {char.status}</p>
          </a>
        ))}
      </div>

      <div className="pagination" style={{ textAlign: 'center', margin: '1rem' }}>
        <button onClick={handlePrev} disabled={!info.prev}>Previous</button>
        <span style={{ margin: '0 1rem' }}>Page {page}</span>
        <button onClick={handleNext} disabled={!info.next}>Next</button>
      </div>

      <FooterClock />
    </div>
  );
}

export default App;

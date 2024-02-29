import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';

function App() {

  const [score, setScore] = useState(234343);
  const [nextShape, setNextShape] = useState(0);
  const rows = 32;
  const columns = 24;
  const gap = 10;

  return (
    <div className="App">
      <Navbar score={score} nextShape={nextShape} />
      <Container rows={rows} columns={columns} gap={gap}  />
    </div>
  );
}

export default App;

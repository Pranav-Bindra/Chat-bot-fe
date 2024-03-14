import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { PayLoad } from './components/PayLoad';
import { Answer } from './components/Answer';
import { About } from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [response, setResponse] = useState('');

  return (
    <Router>
      <div className='font-mono'>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PayLoad setResponse={setResponse} />
              <Answer response={response} />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

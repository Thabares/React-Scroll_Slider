import React from 'react';
import './App.css';
import Banner from './components/Banner';

function App() {
  return (
    <div style={{ background: 'linear-gradient(to right, #8e2de2, #4a00e0)', height: '100vh', position: 'relative' }}>
      <div
        style={{
          position: 'relative',
          top: '5vh',
          bottom: '5vh',
          margin: 'auto',
          minHeight: '90vh',
          maxWidth: '90%',
          maxHeight: '90vh',
        }}
      >
        <Banner />
      </div>
    </div>
  );
}

export default App;

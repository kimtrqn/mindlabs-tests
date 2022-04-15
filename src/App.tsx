import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Session from './pages/session';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Session />} />
      </Routes>
    </div>
  );
}

export default App;

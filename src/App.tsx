import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Session from './pages/sign-in';

import routes from './routes/routes';

function App() {
  return (
    <div>
      <Routes>
        {routes.map((route:any, index:any) => {
          return(
            <Route 
              key={index}
              path={route.path}
              element={route.element}
            />
          )
        })}
      </Routes>
    </div>
  );
}

export default App;

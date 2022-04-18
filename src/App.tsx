import React from 'react';
import { Routes, Route } from "react-router-dom";

import { useAppSelector } from './redux/store';

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

import React from 'react';
import { Routes, Route } from "react-router-dom";

import { useAppSelector } from './redux/store';
import Nav from './pages/nav';

import { sessionRoutes, noSessionRoutes, publicRoutes} from './routes/routes';
import './stylesheets/app.scss';

import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC<any> = () => {
  
  const { isAuthenticated } = useAppSelector((state) => state.session)

  return (
    <div className='app'>
      <Nav isAuthenticated={isAuthenticated}/>
      <div className="white-box">
        <div className="white-box-opacity" />
        <div className="white-box-content">
        <Routes>
          {isAuthenticated ? 
            sessionRoutes.map((route:any, index:any) => {
              return(
                <Route 
                  key={index}
                  path={route.path}
                  element={route.element} />
              )}) :
            noSessionRoutes.map((route:any, index:any) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element} />
              )
            })
          }
          {publicRoutes.map((route:any, index:any) => {
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

      </div>
    </div>
  );
}

export default App;

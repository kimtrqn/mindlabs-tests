import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);



import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
// import { ColorModeScript } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Default from './pages/Default';
import Event from './pages/Event';
import About from './pages/About';
import Team from './pages/Team';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Default><App /></Default>}/>
      <Route exact path='/about' element={<Default><About /></Default>}/>
      <Route exact path='/event' element={<Default><Event /></Default>}/>
      <Route exact path='/team' element={<Default><Team /></Default>}/>
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Router from './routers/Router';

import Router from './routers/Router';


import React from 'react'
// import Check1 from '../components/auth/Check1';
// import Check2 from '../components/auth/Check2';

export default function App() {
  return (
    <div>
    <Router/>
    {/*<Check1/>
      <Check2/>*/}
    </div>
  )
}

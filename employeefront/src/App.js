import './App.css';
import * as React from 'react';
import Employee from './components/Employee';
import Appbar from './components/Appbar';
function App() {
  return (
    <div className="App">
      <Appbar></Appbar>
      <Employee></Employee>
    </div>
  );
}

export default App;

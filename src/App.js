import Navbar from './components/Navbar';
import "./App.css";
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message,type)=>{
    setalert ({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null);
      
    }, 1500);

  }
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="My-App" Mode={Mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    
    <Routes>
          <Route  path="/about" Component={About}>
          </Route>
          <Route path="/" Component={()=> <TextForm showalert={showalert} heading="Enter the Text to analyze below :" Mode={Mode}/>}>
          
          </Route>
    </Routes>
    </div>
    </Router>
    

    
    </>
  );
}

export default App;

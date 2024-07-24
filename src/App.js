// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
   Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [darkmode , setdarkmode] = useState("light");
   const [alert , setalert] = useState(null);
   const showalert = (message , type)=>{
          setalert({
            msg:message,
            type:type
          })
          setTimeout(()=>{
            setalert(null);
          },3000)
   }
  const togglemode = ()=>{
    if(darkmode === 'light'){
      setdarkmode ('dark');
      document.body.style.backgroundColor = 'gray';
      showalert("Dark mode has been enabled" ,"success")
      document.title = "Textutils -Dark mode";
    }
    else{
      setdarkmode  ('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success")
      document.title = "Textutils -Light mode";

    }
  }

  return (
    <>
    <Router>
<Navbar title = "Textutils" abt = "About Textutils" mode = {darkmode} togglemode = {togglemode}/>
<Alert alert ={alert}/>
<div className="container my-3">
<Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <Textform showalert = {showalert} heading = "Enter the text to analyze Below" mode = {darkmode}/>
          </Route>
        </Switch>
</div>
</Router>
</>
  );
}
export default App;

import React from 'react'
import "./App.css"
import { Routes,Route, Link } from "react-router-dom";
import SignUp from './views/SignSection/SignUp';
import SignIn from './views/SignSection/SignIn';
import ConfirmEmail from './views/SignSection/ConfirmEmail';

const App = () => {
 
  return (
 
        <div>
           
           <Routes>
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/ConfirmEmail" element={<ConfirmEmail/>} />
            </Routes>

      
        </div>
           
      );}
  
export default App;


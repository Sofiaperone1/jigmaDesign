import React from 'react'
import Carrousel from '../carrousel/carrousel'
import check from "../../imgs/test/check.svg"
import "./leftSignContent.css"

const LeftSignContent = ({ showParagraph,changeSubtitle }) => {
  return (
    <div className='left_content'>

          <h2>Jigma.<span>io</span></h2>

          {changeSubtitle ? ( <h1>Welcome Back! Please sign in to your Jigma account</h1> ) : (
          <h1>Start your <br/> journey with us.</h1> )}
          
          <p>The Ultimate <span>No-Code</span> Tool for Training your Own AI Assistant</p>

          {showParagraph && <div className='checks'>
          <ul>
            <li><img src={check} alt="check" /><p>50 free messages every month</p></li>
            <li><img src={check} alt="check" /><p>Your own ChatGPT-like chatbot</p></li>
            <li><img src={check} alt="check" /><p>From URL to chatbot in minutes</p></li>
          </ul>
          </div>}

          
  
         <Carrousel/>        

        </div> 
  )
}

export default LeftSignContent
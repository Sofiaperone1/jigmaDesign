import React from 'react'
import LeftContent from './leftContent'
import envelope from "./imgs/sign/envelope.png"
import arrow from "./imgs/sign/arrow.png"
import "./App.css"


const CheckEmail = () => {

  const showParagraph = true;

  const doSomething = () => {
    alert("do something")
  }
  const doOtherThing = () => {
    alert("do other thing")
  }

  return (
    <div className='container'>
      
      <div className='left' >
       <LeftContent showParagraph={showParagraph} />
      </div>

      <div className='right'>

        <div className='right_content' style={{paddingTop:"3%"}}>
          <img className="envelope" src={envelope} alt="envelope" />
          <h1>Check your email</h1>
          <p className='subtitle'> We sent a verification code to <br/> email correspondiente </p>
          
          <div className='square_inputs'>
             <input type="text" />
             <input type="text" />
             <input type="text" />
             <input type="text" />
          </div>
         
          <button onClick={doSomething} className='createAccount'>Verify Email</button>

          <p className='signIn'>Didn't receive the email? <span onClick={doOtherThing}>Click to resend</span></p>

          <div className='goBack'>
            <img src={arrow} alt="arrow" />
            <a href="/">Back to Sign Up</a>
          </div>
          </div>
    
      </div>
          
    </div>
  )
}

export default CheckEmail;




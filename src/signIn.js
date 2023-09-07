import React, {useState}from 'react'
import LeftContent from './leftContent'
import Google from "./imgs/sign/Google.svg"
import apple from "./imgs/sign/apple.svg"
import "./App.css"


const SignIn = () => {

  const showParagraph = false;

  const doSomething = () => {
    alert("do something")
  }

  const doOtherThing = () => {
    alert("do other thing")
  }

  const signInGoogle = () => {
    alert("sign in with google")
  }

  const signInApple = () => {
    alert("sign in with apple")
  }
  
  const forgotPassword = () => {
    alert("forgot password")
  }

  // Define un estado para el checkbox y su función para actualizarlo
  const [isChecked, setIsChecked] = useState(false);

  // Función para manejar el cambio en el estado del checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Invierte el valor actual del estado
  };

  return (
    <div className='container'>
      
      <div className='left' style={{paddingTop:"5%"}}>
       <LeftContent showParagraph={showParagraph} />
      </div>

      <div className='right' style={{paddingTop:"5%"}}>

        <div className='right_content'>
          <h1>Sign In </h1>
          <p className='subtitle'>Join us today and unlock a world of possibilities with our seamless sign-in process.</p>
          
          <div className='sign_buttons'>
            <button onClick={signInGoogle}><img src={Google} alt="google" /><p>Sign in with Google</p></button>
            <button onClick={signInApple}><img src={apple} alt="apple" /><p>Sign in with Apple</p></button>
          </div>
          
          <div className='sign_inputs'>
      
            <p>Email*</p>
            <input type="text" placeholder="Enter your email"/>
            <span></span>

            <p>Password*</p>
            <input type="text" placeholder="Create a password"/>
            <span>Aca va el error</span>
          </div>

          <div className='check_inputs'>
          <label class="custom-checkbox">
          <input 
            type="checkbox"  
            checked={isChecked} 
            onChange={handleCheckboxChange} /> 
          <p>Remember for 30 days</p>
          <button onClick={forgotPassword}>Forgot your password?</button>
          </label>
          </div>
         
          <button onClick={doSomething} className='createAccount'>Create your account</button>

          <p className='signIn'>Don't have an account?<span onClick={doOtherThing}> Sign up here</span></p>
          </div>
    
      </div>
          
    </div>
  )
}
export default SignIn;

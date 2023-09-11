import React,{useState} from 'react'
import LeftSignContent from '../../components/leftSignContent/leftSignContent'
import Google from "../../imgs/sign/Google.svg"
import apple from "../../imgs/sign/apple.svg"
import "./signSection.css"


const SignUp = () => {


  const showParagraph = true;

  const doSomething = () => {
    alert("do something")
  }

  const doOtherThing = () => {
    alert("do other thing")
  }

  const signUpGoogle = () => {
    alert("sign in with google")
  }

  const signUpApple = () => {
    alert("sign in with apple")
  }

  const termsOfService = () => {
    alert("terms of service")
  }

  // Define un estado para el checkbox y su función para actualizarlo
  const [isChecked, setIsChecked] = useState(false);

  // Función para manejar el cambio en el estado del checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Invierte el valor actual del estado
  };

  return (
    <div className='container'>
      
      <div className='left'>
       <LeftSignContent showParagraph={showParagraph}/>
      </div>

      <div className='right'>

        <div className='right_content'>
          <h1>Sign up </h1>
          <p className='subtitle'> Join us today and unlock a world of possibilities with our seamless sign-up process.</p>
          
          <div className='sign_buttons'>
            <button onClick={signUpGoogle}><img src={Google} alt="google" /><p>Sign up with Google</p></button>
            <button onClick={signUpApple}><img src={apple} alt="apple" /><p>Sign up with Apple</p></button>
          </div>
          
          <p className='or'>Or</p>

          <div className='sign_inputs'>
            <p>Name*</p>
            <input type="text" placeholder="Enter your name" />
            <span></span>

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
            onChange={handleCheckboxChange}/> 
          <p>I agree to receive email updates</p>
          </label>
          </div>
          <div className='check_inputs'>
          <label class="custom-checkbox">
          <input
            type="checkbox"
            checked={isChecked} 
            onChange={handleCheckboxChange}/>
          <p>I have read and agree to <span onClick={termsOfService}>Terms of Service</span></p>
          </label>
          </div>
          
          <button onClick={doSomething} className='createAccount'>Create your account</button>

          <p className='signIn'>Have an account?<span onClick={doOtherThing}> Sign in to your account</span></p>
          </div>
    
      </div>
          
    </div>
  )
}


export default SignUp

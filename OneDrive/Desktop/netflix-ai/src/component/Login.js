import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
  const [isSignIn, setisSignUp] = useState(true)

  const toggleIsSignInForm = () => {
    setisSignUp(!isSignIn)
  }



  return (
    <>
      <div>
        <Header />
        <div className='absolute'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="" />
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
          <h1 className='font-bold text-3xl py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
         {!isSignIn&&<input type="text" 
          placeholder='Full Name' 
          className='p-4 my-4 w-full bg-gray-800' 
          />}
          <input type="text"
           placeholder='Email address' 
           className='p-4 my-4 w-full bg-gray-800 ' 
           />
          <input type="password" 
          placeholder='Password' 
          className='p-4 my-4 w-full bg-gray-800' 
          />
          <button className='p-4 my-6 w-full bg-red-700 rounded-lg' >{isSignIn ? 'Sign In' : 'Sign Up'}</button>
          <p className='py-4 cursor-pointer' onClick={toggleIsSignInForm} >{isSignIn ? 'New to netflix Sign Up now ': 'Alredy have account SignIn now'}</p>
        </form>
      </div>

    </>

  )
}

export default Login

import React, { useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import './App.css';

const App= () => {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log("Is good login GOOGLE ", tokenResponse),
    onError: () => {
      console.log("Login Failed");
    },
    
  });


  return (
    <>
      
        <h1>Login google</h1>
        <button onClick={() => login()}>
          Sign in with Google 🚀{' '}
        </button>
        {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        /> */}
     
    </>
  );
}

export default App;

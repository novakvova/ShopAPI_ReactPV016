import { useGoogleLogin } from '@react-oauth/google';
import './App.css';

interface IAuthProvider {
  provider: string,
  token: string
}

const App= () => {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log("Is good login GOOGLE ", tokenResponse);
      const request : IAuthProvider = {
        provider: "Google",
        token: tokenResponse.access_token
      };
    },
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

import { useEffect } from "react";

interface IAuthProvider {
    provider: string;
    token: string;
  }

const GooglePage : React.FC = () => {

    const handleLoginSuccess = (res: any) => {
        console.log("Login google result", res);
        const {credential} = res;
        console.log("Token Id", credential);
        
      };
    
      useEffect(() => {
        const clientId =
          "450853129912-be1idmt0arpbii294s9nr13mgb3a3jf0.apps.googleusercontent.com";
          window.google.accounts!.id.initialize({
          client_id: clientId,
          callback: handleLoginSuccess,
        });
    
        window.google.accounts!.id.renderButton(document.getElementById("loginGoogleBtn"),
        {theme: "outline", size: "Large"});
    
      }, []);

    return(
        <>
                  <h1>Login google</h1>
      <div id="loginGoogleBtn"></div>
        </>
    );
}

export default GooglePage;
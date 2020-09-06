import React, { useEffect } from 'react';
import './App.css';
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

const App = () => {
  const [authState, setAuthState] = React.useState<AuthState>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
    });
  }, []);

  return authState === AuthState.SignedIn ? (
    <div className="App">
      <AmplifySignOut/>
    </div>
  ) : (
    <AmplifyAuthenticator/>
  );
}

export default App;

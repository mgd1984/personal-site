import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const Login = () => {
  useEffect(() => {
    netlifyIdentity.init({});

    netlifyIdentity.on('login', () => {
      netlifyIdentity.close();
      window.location.href = '/powerbi'; // Replace '/powerbi' with the actual URL of the PowerBI page
    });

    return () => {
      netlifyIdentity.off('login');
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  return (
    <button type="button" onClick={login}>Log In</button>
  );
};

export default Login;

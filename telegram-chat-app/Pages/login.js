import { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://telegram.org/js/telegram-widget.js?15';
    script.setAttribute('data-telegram-login', 'Mytelebot'); // bot username
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-auth-url', 'http://localhost:3000/api/auth/telegram'); // server route
    script.setAttribute('data-request-access', 'write'); // Request message access
    document.getElementById('telegram-login').appendChild(script);
  }, []);

  return (
    <div>
      <h1>Login with Telegram</h1>
      <div id="telegram-login"></div>
    </div>
  );
};

export default Login;

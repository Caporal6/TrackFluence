import logo from './logo.svg';
import './App.css';

function App() {
  const loginWithDiscord = () => {
    window.location.href = 'http://localhost:3001/auth/discord/login';
  };

  return (
    <div>
      <h1>Bienvenue sur Trackfluence</h1>
      <button onClick={loginWithDiscord}>Se connecter avec Discord</button>
    </div>
  );
}

export default App;

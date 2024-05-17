import logo from './logo.svg';
import './App.css';

function App() {
  let socket = io.connect("https://receive-ten.vercel.app");
  return (
    <div className="App">
      <h2>Socket.io test</h2>
      
    </div>
  );
}

export default App;

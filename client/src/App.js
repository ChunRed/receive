import './App.css';
import { io } from "socket.io-client";
import {useEffect,useState} from 'react'

let socket;

function App() {
  useEffect(() => {

    socket = io("http://localhost:3000/")
  }, [])

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;

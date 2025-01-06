// src/App.js
import React from "react";
import Quiz from "./components/Quiz"; // Certifique-se de que o caminho está correto
import "./App.css"; // Para os estilos globais

function App() {
  return (
    <div className="App">
      <h1>Jogo de Quiz</h1>
      <Quiz />
    </div>
  );
}

export default App;

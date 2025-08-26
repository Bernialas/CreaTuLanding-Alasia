import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a Emma mesadas!" />
    </>
  );
}

export default App;
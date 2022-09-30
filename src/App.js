import React from "react";
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import './App.css';

const App = () => {
  const nombre = "Dario";
  const greeting = "Greeting pasado por prop a ItemListContainer ;)";
  return (
    <>
      <Navbar nombreUsuario={nombre}/>
      <ItemListContainer greeting={greeting}/>
    </>
  );
};

export default App;

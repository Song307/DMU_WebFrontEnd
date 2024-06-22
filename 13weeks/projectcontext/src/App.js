import Body from './component/Body'
import Header from './component/Header'
import './App.css';
import React from "react";

export const MyContext = React.createContext();

function App() {
  const data="Mycontext value.";

  return (
    <div className="App" >
      <h1> *Project Context </h1>
      
      <Header/> 
      <MyContext.Provider value={data}>
      <Body/>
      
      </MyContext.Provider>
    </div>
  );
}

export default App;

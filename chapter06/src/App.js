import {useState} from "react";
import './App.css';
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";


function App() {
  const [ count, setCount ] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <seciton>
        <Viewer count={count}/>
      </seciton>
      <seciton>
        <Controller handleSetCount={handleSetCount}/>
      </seciton>
    </div>
  );
}

export default App;

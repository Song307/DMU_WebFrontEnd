import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './page/main.js'
import Info from './page/page1.js';


function Routing() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/Info' element={<Info/>} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default Routing;

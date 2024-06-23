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


/*
import Body from './component/Body'; // Body 컴포넌트를 가져옵니다.
import Header from './component/Header'; // Header 컴포넌트를 가져옵니다.
import './App.css'; // App 컴포넌트의 스타일을 정의한 CSS 파일을 가져옵니다.
import React from "react"; // 리액트 라이브러리에서 React 객체를 가져옵니다.

export const MyContext = React.createContext(); // MyContext라는 새로운 컨텍스트를 생성합니다.

function App() {
  const data="Mycontext value."; // 컨텍스트에 전달할 데이터를 정의합니다.

  return (
    <div className="App" >
      <h1> *Project Context </h1>
      
      <Header/> {/* Header 컴포넌트를 렌더링합니다. */}
      
      <MyContext.Provider value={data}> {/* MyContext.Provider를 사용하여 MyContext에 데이터를 제공합니다. */}
        <Body/> {/* Body 컴포넌트를 렌더링합니다. */}
      </MyContext.Provider>
    </div>
  );
}

export default App; // App 컴포넌트를 기본으로 내보냅니다.
*/

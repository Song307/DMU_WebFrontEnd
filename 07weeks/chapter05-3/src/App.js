import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

function ChildComp(){     //ChildComp 컴포넌트 생성
  return(
    <div> child Component </div>
  )
}

function App() {

  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp/>
      </Body>
      <Footer />
    </div>
  );
}

export default App;

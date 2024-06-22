import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';


function App() {
  const name = "송하성";
  return (
    <div className="App">
      <Header />
      <Body na={name} location="구로구" />
      <Footer />
    </div>
  );
}

export default App;

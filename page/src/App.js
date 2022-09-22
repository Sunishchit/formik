import './App.css';
import Api_Fetch from './components/Api_Fetch';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Api_Fetch/>
      <Footer/>
    </div>
  );
}

export default App;

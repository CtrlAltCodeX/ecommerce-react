import './App.css';
import Header from'./Component/Header';
import Section from'./Component/Section';
import Footer from'./Component/Footer';
import AppRouter from './AppRouter';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <AppRouter />

      <Footer></Footer>
    </div>
  );
}

export default App;

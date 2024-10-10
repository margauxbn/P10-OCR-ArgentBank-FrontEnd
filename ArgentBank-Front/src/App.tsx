import './App.css';
import Header from "./components/header/Header";
import Feature from './components/feature/Feature';

function App() {
  return (
    <>
      <Header />
      <div className='features-section'>
        <Feature />
        <Feature />
        <Feature />        
      </div>

    </>
  )
}

export default App

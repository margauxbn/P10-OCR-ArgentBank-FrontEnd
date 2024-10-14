import './App.css';
import Header from "./components/header/Header";
import Feature from './components/feature/Feature';
import data from "./database.json";

function App() {
  return (
    <>
       <Header />
      <div className='features-section'>
        {data.features.map((feature, index) => (
          <Feature 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
    </>
  );
}

export default App;

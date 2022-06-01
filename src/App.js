import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import Jobs from "./pages/Jobs";
//import Search from "./components/ListOfJobs/Search";

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      </Routes>
    
    </div>
      
  );
}
 

export default App;

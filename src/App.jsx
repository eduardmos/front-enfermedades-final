import { Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import Diseases from './pages/Diseases/Diseases'
import Centers from './pages/Centers/Centers'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import InfoCenters from './pages/InfoCenters/InfoCenters';
import InfoDiseases from './pages/InfoDiseases/InfoDiseases';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs/AboutUs'
function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes>
      <Route path='' element= {<Home/>}/>
      <Route path='diseases' element= {<Diseases/>}/>
      <Route path='centers/infoCenters' element= {<InfoCenters/>}/>
      <Route path='diseases/infoDiseases' element= {<InfoDiseases/>}/>
      <Route path='centers' element= {<Centers/>}/>
      <Route path='register' element= {<Register/>}/>
      <Route path='login' element= {<Login/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
     </Routes>
    </div>
  );
}

export default App;

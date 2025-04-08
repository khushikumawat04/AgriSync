import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import HeroSection from './Components/Header/HeroSection';
import Aboutus from './Components/AboutUS/Aboutus';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import MachineryRental from './Components/Transportation/MachineryRental';
import Footer from './Components/Footer/Footer';
import WeatherDashboard from './Components/WeatherForcast/Weather';
import MandiDetail from './Components/MandiDetails/MandiDetail';
import MandisTradeSection from './Components/MandiDetails/MandiDetail';
import MandiContact from './Components/MandiDetails/MandiContact';
import ConsultingSection from './Components/Consulting/ConsultingSection';

import SeedCompostTable from './Components/Seed and Compost/SeedAnd Compost';
import ContactPage from './Components/ContactPage/ContactPage';
import RegisterPage from './Components/Register/Register';
import LoginPage from './Components/Login/Login';
import LabaTestingSection from './Components/LabTesting';
import SellerRegisterForm from './Components/Register/SellerRegisterForm';
import BuyerRegisterForm from './Components/Register/BuyerRegisterForm';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<><HeroSection/><MandiContact/><Aboutus/><MandisTradeSection/></>}/>
        <Route path = "/Transportation" element = {<><MachineryRental/></>}/>
        <Route path = "/weatherforcast" element = {<WeatherDashboard/>}/>
        <Route path = "/Consulting" element= {<ConsultingSection/>} />
        <Route path = "/Seed_Compost" element= {<SeedCompostTable/>}/>
        <Route path = "/Contact-Page" element = {<ContactPage/>}/>
        <Route path = "/Register" element={<RegisterPage/>}/>
        <Route path = "/SellerRegister" element = {<SellerRegisterForm/>}/>
        <Route path = "/BuyerRegister" element = {<BuyerRegisterForm/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path = "/labtesting" element = {<LabaTestingSection/>}/>

      </Routes>
      <Footer/>
      </Router>
     
 
    </div>
  );
}

export default App;


import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from '../src/components/home/home';
import Footer from './components/footer';
import Services from './components/services';
import Shop from './components/shop';
import Success from './components/success';
import Contactus from './components/contactus';
import Appointments from './components/appointments';
import Aboutus from './components/company/aboutus';
import News from './components/company/news';
import Company from './components/company/company';

function App() {
  return (
    < div className='m-2'>
      <Header />
      <div className='content' >

      <div  className='route'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/success' element={<Success />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/appointment' element={<Appointments />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/news' element={<News />} />
        <Route path='/company' element={<Company />} />
      </Routes>
    </div>
    </div>
      <Footer />
      </div>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';
import About from './pages/About';
import Login from './pages/Login';
import Downloads from './pages/Downloads/Downloads';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/contacts' element={<ContactUs />}></Route>
          <Route exact path='/courses' element={<Courses />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='downloads' element={<Downloads />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

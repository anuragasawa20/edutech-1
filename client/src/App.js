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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/contacts' element={<ContactUs />}></Route>
          <Route exact path='/courses' element={<Courses />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

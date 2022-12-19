import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import About from './Components/AboutUs/About';
import NotFound from './Components/NotFound/NotFound';
import Teachers from './Components/Teachers/Teachers';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/teachers' element={<Teachers></Teachers>}></Route>

        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;

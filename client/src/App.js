import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VisitPageLarge from './components/VisitPageLarge';
import VisitPageSmall from './components/VisitPageSmall';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/visitpagelarge/:id" element={<VisitPageLarge />} />
          <Route exact path="/visitpagesmall/:id" element={<VisitPageSmall />} />
          <Route exact path="/searchpage" element={<SearchPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
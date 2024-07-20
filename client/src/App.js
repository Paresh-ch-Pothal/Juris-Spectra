import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VisitPageLarge from './components/VisitPageLarge';
import VisitPageSmall from './components/VisitPageSmall';
import SearchPageNews from './components/SearchPageNews';
import SearchPageIntern from './components/SearchPageIntern';
import Footer from './components/Footer';
import Internship from './components/Internship';
import InternPage from './components/InternPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';

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
          <Route exact path="/searchpagenews" element={<SearchPageNews/>} />
          <Route exact path="/searchpageintern" element={<SearchPageIntern/>} />
          <Route exact path="/internship" element={<Internship/>} />
          <Route exact path="/internpage/:id" element={<InternPage />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

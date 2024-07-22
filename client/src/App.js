
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
import NewsTicker from './components/NewsTicker';
import AddLargeNews from './components/AddLargeNews';
import AddSmallNews from './components/AddSmallNews';
import AddIntern from './components/AddIntern';
import TeamMembers from './components/TeamMembers';
import Event from './components/Event';
import { useEffect, useState } from 'react';


function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='cursor-circle'
        style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      </div>
      <Router>
        <Navbar />
        <div className='margin-top'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/visitpagelarge/:id" element={<VisitPageLarge />} />
            <Route exact path="/visitpagesmall/:id" element={<VisitPageSmall />} />
            <Route exact path="/searchpagenews" element={<SearchPageNews />} />
            <Route exact path="/searchpageintern" element={<SearchPageIntern />} />
            <Route exact path="/internship" element={<Internship />} />
            <Route exact path="/internpage/:id" element={<InternPage />} />
            <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/newsticker" element={<NewsTicker/>} />
            <Route exact path="/addlargenews" element={<AddLargeNews />} />
            <Route exact path="/addsmallnews" element={<AddSmallNews />} />
            <Route exact path="/addintern" element={<AddIntern />} />
            <Route exact path="/teammembers" element={<TeamMembers />} />
            <Route exact path="/event" element={<Event />} />
          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  );
}

export default App;

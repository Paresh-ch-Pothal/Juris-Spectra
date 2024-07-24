
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

  const [mode, setmode] = useState("light")
  const togglemode = (mode) => {
    if (mode == "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#121212"
      document.body.style.color = "white"
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }

  return (
    <>
      <div className='cursor-circle'
        style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      </div>
      <Router>
        <Navbar togglemode={togglemode} mode={mode} />
        <div className='margin-top'>
          <Routes>
            <Route exact path="/" element={<Home mode={mode}/>} />
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/visitpagelarge/:id" element={<VisitPageLarge mode={mode}/>} />
            <Route exact path="/visitpagesmall/:id" element={<VisitPageSmall mode={mode}/>} />
            <Route exact path="/searchpagenews" element={<SearchPageNews mode={mode}/>} />
            <Route exact path="/searchpageintern" element={<SearchPageIntern mode={mode}/>} />
            <Route exact path="/internship" element={<Internship mode={mode}/>} />
            <Route exact path="/internpage/:id" element={<InternPage mode={mode}/>} />
            <Route exact path="/privacypolicy" element={<PrivacyPolicy mode={mode}/>} />
            <Route exact path="/contact" element={<Contact mode={mode}/>} />
            <Route exact path="/newsticker" element={<NewsTicker mode={mode}/>} />
            <Route exact path="/addlargenews" element={<AddLargeNews mode={mode}/>} />
            <Route exact path="/addsmallnews" element={<AddSmallNews mode={mode}/>} />
            <Route exact path="/addintern" element={<AddIntern mode={mode}/>} />
            <Route exact path="/teammembers" element={<TeamMembers mode={mode}/>} />
            <Route exact path="/event" element={<Event mode={mode}/>} />
          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  );
}

export default App;

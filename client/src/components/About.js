import React from 'react'
// import '../../src/all.css';
import { Helmet } from 'react-helmet'
import team1 from '../assets/team1.jpg'
import team3 from '../assets/team3.jpg'

const About = ({mode}) => {
  return (
    <>
      <Helmet>
        <title>About Us - Juris Spectra</title>
        <meta name="description" content="Learn more about Juris Spectra, our mission, values, and team. We are dedicated to providing the best services and opportunities in the legal industry. Join us to stay updated with the latest legal news and find valuable internship opportunities." />
        <meta name="keywords" content="Juris Spectra, about us, legal news, legal internships, law students, legal industry, mission, values, team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
      </Helmet>
      
      <div className="outer" >
        <h1 className='pric'>About us</h1>
        <p className="box" style={{ marginBottom: "40px" }}>Juris Spectra is a platform dedicated to providing valuable educational resources and content. We focus on offering practical insights and strategies to help individuals enhance their skills and knowledge in various fields. Our mission is to empower learners to achieve their personal and professional goals through accessible and engaging materials. Whether you're looking to improve your career prospects, acquire new skills, or simply expand your knowledge, Hustling Learning is here to support your journey.</p>

        <div className="founder flex" style={{ marginBottom: "40px" }}>
          <div className="leftabout">
            <div><img src={team1} alt="founder" srcset="" />
              <p style={{textAlign: "center",marginTop: "10px"}}>Anuj Gupta - Founder, Juris Spectra</p>
            </div>
          </div>
          <div className="rightabout">
            <div><img src={team3} alt="co-founder" srcset="" />
              <p style={{textAlign: "center",marginTop: "10px"}}>Gella Vimala, Co- founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

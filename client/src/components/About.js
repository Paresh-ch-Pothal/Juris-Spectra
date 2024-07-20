import React from 'react'
import './all.css';

const About = () => {
  return (
    <>
      <div className="outer">
        <h1 className='pric'>About us</h1>
        <p className="box">Hustling Learning is a platform dedicated to providing valuable educational resources and content. We focus on offering practical insights and strategies to help individuals enhance their skills and knowledge in various fields. Our mission is to empower learners to achieve their personal and professional goals through accessible and engaging materials. Whether you're looking to improve your career prospects, acquire new skills, or simply expand your knowledge, Hustling Learning is here to support your journey.</p>

        <div className="founder flex">
          <div className="left">
            <div><img src="" alt="founder" srcset="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="right">
            <div><img src="" alt="co-founder" srcset="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

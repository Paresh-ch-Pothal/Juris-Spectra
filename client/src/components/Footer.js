import React from 'react'
import instagram from '../assets/instagram.webp'
import linkedin from '../assets/linkedin.webp'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Footer = () => {

    let navigate=useNavigate();
    const handleSubscribe=()=>{
        navigate("/contact")
    }

    return (
        <>
            <div className='footer'>
                <div style={{ textAlign: "center" }} className='footer1'><h4 className='mx-2'>Juris Spectra</h4>
                    <div className='footer2'>A comprehensive platform offering law students daily news, internships, and career opportunities in the legal field.</div>
                    <button onClick={handleSubscribe} className="my-4 subscribe text-center" type="button">Subscribe</button>
                </div>

                <div>
                    <ul>
                        <li><a href="https://www.linkedin.com/company/juris-spectra/" style={{listStyle: "none",textDecoration: "none",color: "white"}}><img  src={linkedin} className='mx-2' alt="html" width="40" height="40" style={{ borderRadius: "20px", cursor: "pointer" }} /><span>LinkedIn</span></a></li>
                        <li className='my-3'><a href="https://www.instagram.com/jurisspectra?igsh=MTZwYWZ5ZGEzMnExMw==" style={{listStyle: "none",textDecoration: "none",color: "white"}}><img src={instagram} className='mx-2' alt="html" width="40" height="40" style={{ borderRadius: "20px", cursor: "pointer" }} /><span>Instagram</span></a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><span><Link style={{listStyle: "none",textDecoration: "none",color: "white"}} to="/">Home</Link></span></li>
                        <li className='my-1'><span><Link style={{listStyle: "none",textDecoration: "none",color: "white"}} to="/about">About</Link></span></li>
                        <li className='my-1'><span><Link style={{listStyle: "none",textDecoration: "none",color: "white"}} to="/contact">Contact</Link></span></li>
                        <li className='my-1'><span><Link style={{listStyle: "none",textDecoration: "none",color: "white"}} to="/teammembers">Team</Link></span></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><span><Link style={{listStyle: "none",textDecoration: "none",color: "white"}} to="/privacypolicy">Privacy</Link></span></li>
                        <li className='my-1'><span><Link style={{listStyle: "none",textDecoration: "none",color: "white"}} to="/event">Event</Link></span></li>
                        <li className='my-1'><span><Link style={{listStyle: "none",textDecoration: "none",color: "white"}} to="/internship">Internships</Link></span></li>
                        <li className='my-1'><span><Link style={{listStyle: "none",textDecoration: "none",color: "white"}} to="/about">About</Link></span></li>
                    </ul>
                </div>
            </div>
            <div className='footerEnd'>
                <p>&copy; Copyriight Issued 2024 Juris Spectra. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer

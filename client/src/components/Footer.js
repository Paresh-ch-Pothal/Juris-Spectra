import React from 'react'
import instagram from '../assets/instagram.webp'
import linkedin from '../assets/linkedin.webp'


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div style={{ textAlign: "center" }} className='footer1'><h4 className='mx-2'>Juris Spectra</h4>
                    <div className='footer2'>A comprehensive platform offering law students daily news, internships, and career opportunities in the legal field.</div>
                </div>

                <div>
                    <ul>
                        <li><img src={linkedin} className='mx-2' alt="html" width="40" height="40" style={{ borderRadius: "20px", cursor: "pointer" }} /><span>LinkedIn</span></li>
                        <li className='my-3'><img src={instagram} className='mx-2' alt="html" width="40" height="40" style={{ borderRadius: "20px", cursor: "pointer" }} /><span>Instagram</span></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><span><a href="">Home</a></span></li>
                        <li className='my-1'><span><a href="">About</a></span></li>
                        <li className='my-1'><span><a href="">Contact</a></span></li>
                        <li className='my-1'><span><a href="">Team</a></span></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><span><a href="">Privacy</a></span></li>
                        <li className='my-1'><span><a href="">Event</a></span></li>
                        <li className='my-1'><span><a href="">Internships</a></span></li>
                        <li className='my-1'><span><a href="">About</a></span></li>
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

import React from 'react'
import jurisLogo from '../assets/juris_spectra_logo.jpg'
import { Helmet } from 'react-helmet'
import team1 from '../assets/team1.jpg'
import team3 from '../assets/team3.jpg'
import team2 from '../assets/team2.jpg'
import team4 from '../assets/team4.jpg'
import team5 from '../assets/team5.jpg'

const TeamMembers = () => {
    return (
        <>
            <Helmet>
                <title>Team Members - Juris Spectra</title>
                <meta name="description" content="Meet the dedicated team behind Juris Spectra. Our team consists of experienced professionals committed to providing the best services and resources in the legal industry." />
                <meta name="keywords" content="Juris Spectra, team members, legal professionals, experienced team, legal industry" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
            </Helmet>
            <div className="team">
                <h1 className="pric">Team Members</h1>

                <div className="members">

                    <div className="image one">

                        <div className="flex-col">
                            <div className="photo-adjust"><img className='photo' src={team1} alt="image1" /></div>
                            <p style={{textAlign: "center"}}>Anuj Gupta - Founder, Juris Spectra</p>
                        </div>
                        <div className="flex-col">
                            <div className="photo-adjust"><img className='photo' src={team3} alt="image1" /></div>
                            <p style={{textAlign: "center"}}>Gella Vimala, Co- founder</p>
                        </div>
                        <div className="flex-col">
                            <div className="photo-adjust"><img className='photo' src={team2} alt="image1" /></div>
                            <p style={{textAlign: "center"}}>Mansi Singh, Social Media Manager</p>
                        </div>

                    </div>
                    <div className="image two">
                        <div className="flex-col">
                            <div className="photo-adjust"><img className='photo' src={team4} alt="image1" /></div>
                            <p style={{textAlign: "center"}}>Prem Chandra Prasad - Website Manager</p>
                        </div>
                        <div className="flex-col">
                            <div className="photo-adjust"><img className='photo' src={team5} alt="image1" /></div>
                            <p style={{textAlign: "center"}}>Paresh Chandra Pothal - Website Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMembers

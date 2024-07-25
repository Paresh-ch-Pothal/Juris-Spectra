import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';


const InternPage = ({mode}) => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const [loading, setloading] = useState(false)
    // const host = "http://localhost:5000";

    const apiUrl = process.env.REACT_APP_API_URL;


    const fetchintern = async () => {
        setloading(true)
        const response = await fetch(`https://juris-spectra.vercel.app/api/fetchinternid/${id}`, {
            method: "GET",
        });
        const data = await response.json();

        setInfo(data.internship || {});
        setloading(false)
    }


    useEffect(() => {
        // eslint-disable-next-line
        fetchintern();
    }, [id]);

    return (
        <div>
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>) : (
                <div className='visitpage'>
                    <h1 style={{ textAlign: "center" }} className='my-2'>{info.title}</h1>
                    <div className='visitpageimg my-2'>
                        <img src={info.internimg ? info.internimg : "https://www.livelaw.in/cms/wp-content/uploads/2013/11/Law-School-Internship.jpg"} alt="" />
                    </div>
                    {Array.isArray(info.desc) && info.desc.map((intern, index) => (
                        <div className='phase1 my-1' key={intern._id}>
                            <div className='head'>
                                {intern.h1 && <h3 style={{ textAlign: "center" }}>{intern.h1}</h3>}
                            </div>
                            <div className='subhead my-1'>
                                {intern.sub1 && <h5 style={{ textAlign: "center" }}>{intern.sub1}</h5>}
                            </div>
                            <div className='visitpara my-1'>
                                {intern.desc && <p>{intern.desc}</p>}
                            </div>
                            {intern.table && (
                                <div
                                    style={{
                                        color: mode === "light" ? "black" : "white",
                                        backgroundColor: mode === "light" ? "white" : "#121212",
                                        border: mode === "light" ? "#121212" : "white"
                                    }}
                                    dangerouslySetInnerHTML={{ __html: intern.table }}
                                    className='my-2 tablecontain'
                                />
                            )}
                            {intern.link && <div>
                                <a href={intern.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-success my-4" type="button">Click Here</button></a>
                            </div>}
                        </div>
                    ))}
                </div>
            )
            }
        </div>

    )
}

export default InternPage;


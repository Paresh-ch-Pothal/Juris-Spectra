import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const InternPage = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const host = "http://localhost:5000";

    const fetchintern = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/fetchinternid/${id}`, {
            method: "GET",
        });
        const data = await response.json();

        setInfo(data.internship || {});
    }


    useEffect(() => {
        fetchintern();
    }, [id]);

    return (
        <div>
            <div className='visitpage'>
                <h1 style={{ textAlign: "center" }}>{info.title}</h1>
                <div className='visitpageimg'>
                    <img src={info.internimg ? info.internimg : "https://www.livelaw.in/cms/wp-content/uploads/2013/11/Law-School-Internship.jpg"} alt="" />
                </div>
                {Array.isArray(info.desc) && info.desc.map((intern, index) => (
                    <div className='phase1' key={intern._id}>
                        <div className='head'>
                            {intern.h1 && <h3 style={{ textAlign: "center" }}>{intern.h1}</h3>}
                        </div>
                        <div className='subhead'>
                            {intern.sub1 && <h5 style={{ textAlign: "center" }}>{intern.sub1}</h5>}
                        </div>
                        <div className='visitpara'>
                            {intern.desc && <p>{intern.desc}</p>}
                        </div>
                        <div className='table'>
                            {intern.table && <div dangerouslySetInnerHTML={{ __html: intern.table }} />}
                        </div>
                        { intern.link && <div>
                            <a href={intern.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-success my-4" type="button">Click Here</button></a>
                        </div> }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InternPage;


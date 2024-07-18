import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const VisitPageSmall = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const host = "http://localhost:5000";

    const fetchSmallNews = async () => {
        const response = await fetch(`${host}/api/fetchnewssmallid/${id}`, {
            method: "GET",
        });
        const data = await response.json();

        setInfo(data.newssmall || {});
    }

    useEffect(() => {
        fetchSmallNews();
    }, [id]);

    return (
        <div>
            <div className='visitpage'>
                <h1 style={{ textAlign: "center" }}>{info.title}</h1>
                <div className='visitpageimg'>
                    <img src={info.newsimg} alt="" />
                </div>
                {Array.isArray(info.desc) && info.desc.map((news, index) => (
                    <div className='phase1' key={index}>
                        <div className='head'>
                            {news.h1 && <h3 style={{ textAlign: "center" }}>{news.h1}</h3>}
                        </div>
                        <div className='subhead'>
                            {news.sub1 && <h5 style={{ textAlign: "center" }}>{news.sub1}</h5>}
                        </div>
                        <div className='visitpara'>
                            {news.desc && <p>{news.desc}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VisitPageSmall;

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const VisitPageSmall = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    // const host = "http://localhost:5000";

    const fetchSmallNews = async () => {
        const response = await fetch(`https://juris-spectra.vercel.app/api/fetchnewssmallid/${id}`, {
            method: "GET",
        });
        const data = await response.json();

        setInfo(data.newssmall || {});
    }

    useEffect(() => {
        fetchSmallNews();
        // eslint-disable-next-line
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
                        <div className='table'>
                            {news.table && <div dangerouslySetInnerHTML={{ __html: news.table }} />}
                        </div>
                        {news.link && <div>
                            <a href={news.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-success my-4" type="button">Click Here</button></a>
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VisitPageSmall;

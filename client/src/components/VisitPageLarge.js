import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const VisitPageLarge = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const [loading, setloading] = useState(false)
    // const host = "http://localhost:5000";

    const apiUrl = process.env.REACT_APP_API_URL;


    const fetchLargeNews = async () => {
        setloading(true)
        const response = await fetch(`https://juris-spectra.vercel.app/api/fetchnewslargeid/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        if (data.success == true || data.success == false) {
            setloading(false)
        }
        setInfo(data.newslarge || {});
    }

    useEffect(() => {
        fetchLargeNews();
        // eslint-disable-next-line
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
                        <img src={info.newsimg} alt="" />
                    </div>
                    {Array.isArray(info.desc) && info.desc.map((news, index) => (
                        <div className='phase1' key={index}>
                            <div className='head my-2'>
                                {news.h1 && <h3 style={{ textAlign: "center" }} className='my-2'>{news.h1}</h3>}
                            </div>
                            <div className='subhead'>
                                {news.sub1 && <h5 style={{ textAlign: "center" }} className='my-2'>{news.sub1}</h5>}
                            </div>
                            <div className='visitpara'>
                                {news.desc && <p className='my-2'>{news.desc}</p>}
                            </div>
                            <div className='table'>
                                {news.table && <div dangerouslySetInnerHTML={{ __html: news.table }} className='my-2' />}
                            </div>
                            {news.link && <div className='my-2'>
                                <a href={news.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-success my-4" type="button">Click Here</button></a>
                            </div>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default VisitPageLarge;

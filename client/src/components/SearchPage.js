import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const SearchPage = ({ data }) => {
    let history = useNavigate();

    const handlelargeNews = (id) => {
        // console.log(id);
        history(`/visitpagelarge/${id}`);
    }

    const handlesmallNews = (id) => {
        history(`/visitpagesmall/${id}`);
    }


    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }


    return (
        <>
            {data?.map((news) => {
                return (
                    <>
                        <div className='homecardsearch my-2' key={news._id}>
                            <img onClick={() => { handlelargeNews(news._id) }} style={{ cursor: "pointer" }} src={news.newsimg ? news.newsimg : "https://www.livelaw.in/cms/wp-content/uploads/2013/11/Law-School-Internship.jpg"} alt="" />
                            <div className='homecardtextsearch'>
                                <h3 onClick={() => { handlelargeNews(news._id) }} style={{ cursor: "pointer" }} className='mx-2'>{news.title ? news.title : "No Result"}</h3>
                                <div className='author'>
                                    <div className='avatar'>
                                        <RxAvatar className='mx-1 avatarimg' /><span>{news.author}</span>
                                    </div>
                                    <div className='date'>
                                        <CiClock2 className='avatarimg' /> <span>{formatDate(Date.now())}</span>
                                    </div>
                                </div>
                                <p className="mx-2 para">{news.homedesc}</p>
                            </div>
                        </div>
                        <div className='line'></div>
                    </>
                )
            })
            }
        </>
    )
}

export default SearchPage

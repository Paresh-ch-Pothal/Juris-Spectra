import React, { useEffect, useState } from 'react'
import jurisLogo from '../assets/juris_spectra_logo.jpg'
import { RxAvatar } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import VisitPageLarge from './VisitPageLarge';

const Home = () => {

  const host = "http://localhost:5000";
  const [largeNews, setlargeNews] = useState([])
  const [smallNews, setsmallNews] = useState([])
  const getlargenews = async () => {
    const response = await fetch(`${host}/api/fetchnewslarge`, {
      method: "GET",

    });
    const data = await response.json();
    console.log(data.newslarge);
    setlargeNews(data.newslarge)
  }

  const getsmallnews = async () => {
    const response = await fetch(`${host}/api/fetchnewssmall`, {
      method: "GET",

    });
    const data = await response.json();
    console.log(data.newssmall);
    setsmallNews(data.newssmall)
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


  useEffect(() => {
    getlargenews();
    getsmallnews();
  }, [])

  let history=useNavigate();

  const handlelargeNews=(id)=>{
    console.log(id);
    history(`/visitpagelarge/${id}`);
  }

  const handlesmallNews=(id)=>{
    history(`/visitpagesmall/${id}`);
  }

  return (
    <div>
      <div className="homepage">
        <div className="right mt-4">


          {largeNews.map((news) => {
            return (
              <>
                <div className='homecard my-2' key={news._id}>
                  <img onClick={()=>{handlelargeNews(news._id)}} style={{cursor: "pointer"}} src={news.newsimg} alt="" />
                  <div className='homecardtext'>
                    <h3 onClick={()=>{handlelargeNews(news._id)}} style={{cursor: "pointer"}} className='mx-2'>{news.title}</h3>
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
          })}
        </div>
        <div className="left mt-4">
          {smallNews.map((news) => {
            return (


              <div className='homecard my-2' key={news._id}>
                <img className='leftimg' style={{cursor: "pointer"}} onClick={()=>{handlesmallNews(news._id)}} src={news.newsimg} alt="" />
                <div className='homecardtext'>
                  <h5 style={{cursor: "pointer"}} onClick={()=>{handlesmallNews(news._id)}} className='mx-2'>{news.title}</h5>
                  <div className='author'>
                    <div className='date mx-2'>
                      <CiClock2 className='avatarimgleft' /> <span>{formatDate(Date.now())}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Home

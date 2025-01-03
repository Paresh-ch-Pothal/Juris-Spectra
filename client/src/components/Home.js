import React, { useEffect, useState } from 'react'

import { RxAvatar } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import instagram from '../assets/instagram.webp'
import linkedin from '../assets/linkedin.webp'
import NewsTicker from './NewsTicker';
import { Helmet } from 'react-helmet';

const Home = () => {

  // const host = "http://localhost:5000";
  const [largeNews, setlargeNews] = useState([])
  const [smallNews, setsmallNews] = useState([])
  const [count, setcount] = useState(5);
  const [cousmall, setcousmall] = useState(5)
  const [loading, setloading] = useState(false)

  const apiUrl = process.env.REACT_APP_API_URL;


  const getlargenews = async () => {
    setloading(true)
    const response = await fetch(`https://juris-spectra.vercel.app/api/fetchnewslarge`, {
      method: "GET",

    });
    const data = await response.json();
    // console.log(data.newslarge);
    // console.log(Object.keys(data.newslarge).length)
    setlargeNews(data.newslarge)
    setloading(false)
  }

  const getsmallnews = async () => {
    setloading(true)
    const response = await fetch(`https://juris-spectra.vercel.app/api/fetchnewssmall`, {
      method: "GET",

    });
    const data = await response.json();
    // console.log(data.newssmall);
    setsmallNews(data.newssmall)
    setloading(false)
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

  function getdate() {
    var d = new Date(),
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
    // eslint-disable-next-line
    getlargenews();
    getsmallnews();
  }, [count, cousmall])

  let history = useNavigate();

  const handlelargeNews = (id) => {
    // console.log(id);
    history(`/visitpagelarge/${id}`);
  }

  const handlesmallNews = (id) => {
    history(`/visitpagesmall/${id}`);
  }

  const handleLoadMore = () => {
    setcount((prevCount) => prevCount + 5);
  }

  const handleLoadMoreSmall = () => {
    setcousmall((prevCount) => prevCount + 5);
  }



  return (
    <div style={{ overflowX: "hidden" }}>
      <Helmet>
        <title>Home - Juris Spectra</title>
        <meta name="description" content="Welcome to Juris Spectra. Stay informed with the latest legal news and updates. Explore articles, news, and resources related to the legal industry." />
        <meta name="keywords" content="Juris Spectra, legal news, legal updates, legal industry, articles, resources" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
      </Helmet>

      <div className="homepage">
        <div className="right mt-4">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>) : (

            largeNews.map((news, index) => {
              {
                if (index < count)
                  return (
                    <>
                      <div key={news._id}>
                        <div className='homecard my-2'>

                          <img onClick={() => { handlelargeNews(news._id) }} style={{ cursor: "pointer" }} src={news.newsimg ? news.newsimg : "https://www.livelaw.in/cms/wp-content/uploads/2013/11/Law-School-Internship.jpg"} alt="" />

                          <div className='homecardtext'>
                            <h3 onClick={() => { handlelargeNews(news._id) }} style={{ cursor: "pointer" }} className='mx-2'>{news.title}</h3>
                            <div className='author'>
                              <div className='avatar'>
                                <RxAvatar className='mx-1 avatarimg' /><span>{news.author}</span>
                              </div>
                              <div className='date'>
                                <CiClock2 className='avatarimg' /> <span>{formatDate(news.createdAt)}</span>
                              </div>
                            </div>
                            <p className="mx-2 para">{news.homedesc}</p>
                          </div>
                        </div>
                        <div className='line'></div>
                      </div>
                    </>
                  )
              }
            })
          )
          }
          {largeNews.length > 5 &&
            <div className='rightbutton'>
              <button disabled={count >= largeNews.length ? true : false} onClick={handleLoadMore} className="btn btn-outline-success my-4" type="button">Read More</button>
            </div>}


        </div>

        <div className="left mt-4">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>) : (
            smallNews.map((news, index) => {
              {
                if (index < cousmall)
                  return (

                    <div className='homecard my-2' key={news._id}>


                      <img className='leftimg' style={{ cursor: "pointer" }} onClick={() => { handlesmallNews(news._id) }} src={news.newsimg ? news.newsimg : "https://www.livelaw.in/cms/wp-content/uploads/2013/11/Law-School-Internship.jpg"} alt="" />
                      <div className='homecardtext'>
                        <h6 style={{ cursor: "pointer" }} onClick={() => { handlesmallNews(news._id) }} className='mx-2'>{news.title}</h6>
                        <div className='author'>
                          <div className='date mx-2'>
                            <CiClock2 className='avatarimgleft' /> <span>{formatDate(news.createdAt)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              }
            }))
          }

          {smallNews.length > 5 &&
            <div className='rightbutton'>
              <button disabled={cousmall >= smallNews.length ? true : false} onClick={handleLoadMoreSmall} className="btn btn-outline-success my-4" type="button">Read More</button>
            </div>}

          <div className="follow">
            <div className='boxfollow'>Follow Us</div>
            <div className="linebox" style={{ height: "3px", background: "black" }}></div>
            <div className='socialLogo'>
              <li className='list1stImg ml-1'>
                {/* here to be updated the href value */}
                <a href="https://www.linkedin.com/company/juris-spectra/"><img src={linkedin} alt="" /><span className='mx-2' style={{ fontSize: "1.2rem", color: "white" }}>Linkedin</span></a>
              </li>
              <li className='list2ndImg mr-1'>
                <a href="https://www.instagram.com/jurisspectra?igsh=MTZwYWZ5ZGEzMnExMw=="><img src={instagram} alt="" /><span className='mx-2' style={{ fontSize: "1.2rem", color: "white" }}>Instagram</span></a>
              </li>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchPage = () => {

    const host = "http://localhost:5000";
    const [data, setdata] = useState([])
    let history = useNavigate();

    const handleintern = (id) => {
        // console.log(id);
        history(`/internpage/${id}`);
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

    const location = useLocation();
    // console.log(location)
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");
    // console.log(searchQuery)

    const searchData = async (query) => {
        const response = await fetch(`${host}/api/searchdataintern?search=${encodeURIComponent(query)}`, {
            method: "GET",
        });
        const json = await response.json();
        // console.log(json)
        if (json.success) {
            toast.success(json.message, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setdata(json.result || [])
        }
        else {
            toast.error('No Such results Found', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setdata([])
        }
        // console.log(json.result);
    }

    useEffect(() => {
        if (searchQuery) {
            searchData(searchQuery)
        }
    }, [searchQuery])


    return (
        <>
            {/* <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            /> */}
            {data.length > 0 ? data.map((news) => {
                return (
                    <>
                        <div className='homecardsearch my-2' key={news._id}>
                            <img onClick={() => { handleintern(news._id) }} style={{ cursor: "pointer" }} src={news.internimg ? news.newsimg : "https://www.livelaw.in/cms/wp-content/uploads/2013/11/Law-School-Internship.jpg"} alt="" />
                            <div className='homecardtextsearch'>
                                <h3 onClick={() => { handleintern(news._id) }} style={{ cursor: "pointer" }} className='mx-2'>{news.title ? news.title : "No Result"}</h3>
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
                    </>
                )
            })
            : <h1 style={{textAlign: "center"}}>No Result Found</h1>}
        </>
    )
}

export default SearchPage

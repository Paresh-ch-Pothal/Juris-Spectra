import React, { useEffect, useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchPage = () => {

    // const host = "http://localhost:5000";
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
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

    const apiUrl = process.env.REACT_APP_API_URL;


    const searchData = async (query) => {
        setloading(true)
        const response = await fetch(`https://juris-spectra.vercel.app/api/searchdataintern?search=${encodeURIComponent(query)}`, {
            method: "GET",
        });
        const json = await response.json();
        // console.log(json)
        if (json.success) {
            // toast.success(json.message, {
            //     position: "top-left",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            //     transition: Bounce,
            // });
            setdata(json.result || [])
            setloading(false)
        }
        else {
            // toast.error('No Such results Found', {
            //     position: "top-left",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            //     transition: Bounce,
            // });
            setloading(false)
            setdata([])
        }
        // console.log(json.result);
    }

    useEffect(() => {
        if (searchQuery) {
            searchData(searchQuery)
        }
        // eslint-disable-next-line
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

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                data.length > 0 ? data.map((intern) => (
                    <div key={intern._id}>
                        <div className='homecardsearch my-2'>
                            <img
                                onClick={() => { handleintern(intern._id) }}
                                style={{ cursor: "pointer" }}
                                src={intern.internimg ? intern.internimg : "https://www.livelaw.in/cms/wp-content/uploads/2013/11/Law-School-Internship.jpg"}
                                alt=""
                            />
                            <div className='homecardtextsearch'>
                                <h3
                                    onClick={() => { handleintern(intern._id) }}
                                    style={{ cursor: "pointer" }}
                                    className='mx-2'
                                >
                                    {intern.title ? intern.title : "No Result"}
                                </h3>
                                <div className='author'>
                                    <div className='avatar'>
                                        <RxAvatar className='mx-1 avatarimg' /><span>{intern.author}</span>
                                    </div>
                                    <div className='date'>
                                        <CiClock2 className='avatarimg' /> <span>{formatDate(intern.createdAt)}</span>
                                    </div>
                                </div>
                                <p className="mx-2 para">{intern.homedesc}</p>
                            </div>
                        </div>
                        <div className='line'></div>
                    </div>
                )) : (
                    <h1 style={{ textAlign: "center" }}>No Result Found</h1>
                )
            )}
        </>
    );
}

export default SearchPage

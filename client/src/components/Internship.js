import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import SearchPageIntern from './SearchPageIntern';


const Internship = () => {

    const host = "http://localhost:5000";
    const [intern, setintern] = useState([])
    const [count, setcount] = useState(5);
    const [loading, setloading] = useState(false)
    const [search, setsearch] = useState('')
    const [data, setdata] = useState([])


    const getintern = async () => {
        setloading(true)
        const response = await fetch(`${process.env.REACT_APP_API_URL}/fetchintern`, {
            method: "GET",

        });
        const data = await response.json();
        // console.log(data.internship);
        // console.log(Object.keys(data.newslarge).length)
        setintern(data.internship)
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




    useEffect(() => {
        getintern()
    }, [count])

    let history = useNavigate();

    const handleintern = (id) => {
        // console.log(id);
        history(`/internpage/${id}`);
    }

    const handleLoadMore = () => {
        setcount((prevCount) => prevCount + 5);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        history(`/searchpageintern?search=${encodeURIComponent(search)}`);
    }

    const handleOnchange = (e) => {
        if (e.target.name == "search") {
            setsearch(e.target.value)
        }
    }

    const location = useLocation();
    // console.log(location)
    // const queryParams = new URLSearchParams(location.search);
    // const searchQuery = queryParams.get("search");
    // console.log(searchQuery)

    // const searchData = async (query) => {
    //     const response = await fetch(`${host}/api/searchdataintern?search=${encodeURIComponent(query)}`, {
    //         method: "GET",
    //     });
    //     const json = await response.json();
    //     console.log(json)
    //     if (data.success) {
    //         toast.success('Fetched All the details', {
    //             position: "top-left",
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             transition: Bounce,
    //         });
    //         setdata(json.result)
    //     }
    //     else {
    //         toast.error('No Such results Found', {
    //             position: "top-left",
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             transition: Bounce,
    //         });
    //         setdata(["Not Found"])
    //     }
    //     console.log(data.result);
    // }

    // useEffect(() => {
    //         searchData(search)
    // }, [search])

    return (
        <div>
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
            <form className="d-flex my-2 mx-2" role="search" onSubmit={handleSearchSubmit}>
                <input onChange={handleOnchange} className="form-control me-2" type="search" id='search' name='search' value={search} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {intern.map((intern, index) => {
                {
                    if (index < count)
                        return (
                            <>
                                <div className='homecardintern my-2' key={intern._id}>
                                    <img onClick={() => { handleintern(intern._id) }} style={{ cursor: "pointer" }} src={intern.internimg ? intern.internimg : "https://www.livelaw.in/cms/wp-content/uploads/2013/11/Law-School-Internship.jpg"} alt="" />
                                    <div className='homecardtextintern'>
                                        <h3 onClick={() => { handleintern(intern._id) }} style={{ cursor: "pointer" }} className='mx-2'>{intern.title}</h3>
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
                            </>
                        )
                }
            })
            }
            <div className='rightbutton'>
                <button disabled={count >= intern.length ? true : false} onClick={handleLoadMore} className="btn btn-outline-success my-4" type="button">Read More</button>
            </div>

            {location.pathname === '/searchpageintern' && <SearchPageIntern data={data} />}
        </div >
    )
}
export default Internship

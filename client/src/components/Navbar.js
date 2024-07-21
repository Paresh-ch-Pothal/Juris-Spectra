import React, { useEffect, useState } from 'react'
import jurisLogo from '../assets/juris_spectra_logo.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SearchPageNews from './SearchPageNews';
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const host = "http://localhost:5000";

    const [search, setsearch] = useState('')
    let history = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        setsearch(search)
        history(`/searchpagenews?search=${encodeURIComponent(search)}`);
    }

    const handleOnchange = (e) => {
        if (e.target.name == "search") {
            setsearch(e.target.value)
        }
    }

    const location = useLocation();
    // console.log(location.pathname)
    // const queryParams = new URLSearchParams(location.search);
    // const searchQuery = queryParams.get("search");
    // // console.log(searchQuery)

    // const searchData = async (query) => {
    //     const response = await fetch(`${host}/api/searchdatanews?search=${encodeURIComponent(query)}`, {
    //         method: "GET",
    //     });
    //     const data = await response.json();
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
    //             });
    //         setdata(data.result || [])
    //     }
    //     else{
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
    //             });
    //         setdata([])
    //     }
    //     // console.log(data.result);
    // }

    // useEffect(() => {
    //     if (searchQuery) {
    //         searchData(search)
    //     }
    // }, [searchQuery])

    return (
        <>
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
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <img style={{ borderRadius: "120px" }} className='mx-2' src={jurisLogo} alt="Bootstrap" width="40" height="40" />
                        <a className="navbar-brand" href="/">Juris Spectra</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" to="/privacypolicy">Privacy Policy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" to="/internship">Internships</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" to="/">Team Members</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" to="/">Event</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                                <input style={{ display: location.pathname === "/internship" ? "none" : "block" }}  onChange={handleOnchange} className="form-control me-2" type="search" id='search' name='search' value={search} placeholder="Search" aria-label="Search" />
                                <button style={{ display: location.pathname === "/internship" ? "none" : "block" }} className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            {location.pathname === '/searchpagenews' && <SearchPageNews />}
        </>


    )
}

export default Navbar

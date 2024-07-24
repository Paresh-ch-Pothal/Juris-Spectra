import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [user, setuser] = useState({
        name: '',
        email: "",
        phone: '',
        message: ""
    })

    // const host = "http://localhost:5000";

    const apiUrl = process.env.REACT_APP_API_URL;


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://juris-spectra.vercel.app/api/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: user.email, name: user.name, phone: user.phone, message: user.message })
        })
        const data = await response.json();
        if (data.success) {
            toast.success(data.message, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
            setuser({
                name: '',email: '',phone: '',message: ''
            })
        }
        else {
            toast.error(data.message, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
        // console.log(data);
    }

    const handleChange = (e) => {
        setuser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <>
            <Helmet>
                <title>Contact Us - Juris Spectra</title>
                <meta name="description" content="Get in touch with Juris Spectra. We are here to help with any questions or inquiries you may have. Contact us for more information about our services, partnerships, and opportunities in the legal industry." />
                <meta name="keywords" content="Juris Spectra, contact us, legal inquiries, legal industry, partnerships, services, legal opportunities" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
            </Helmet>
            <div className="conc">

                <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition="Slide"
                />
                <h2 className='pric'>Lets Connect</h2>
                <div className="frm">
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input onChange={handleChange} type="email" className="form-control" id="email" name='email' value={user.email} placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input onChange={handleChange} type="text" className="form-control" id="name" name='name' value={user.name} placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input onChange={handleChange} type="text" className="form-control" id="phone" name='phone' value={user.phone} placeholder="" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea onChange={handleChange} className="form-control" id="message" name='message' value={user.message} rows="3"></textarea>
                        </div>
                        <div className='submit flex' >
                            <button style={{ width: "50%" }} type="submit" className="btn btn-outline-success text-center my-4">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="last">
                    <h2 style={{ textAlign: "center" }}>Contact us</h2>
                    <p style={{ margin: "10px 20px" }}>Email us at: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio.</p>
                    <p style={{ margin: "10px 20px" }}>call us at: 99999999999</p>
                </div>
            </div>
        </>
    )
}

export default Contact

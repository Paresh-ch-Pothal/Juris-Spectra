import React, { useState } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [user, setuser] = useState({
        name: '',
        email: "",
        phone: '',
        message: ""
    })

    const host = "http://localhost:5000";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
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
        console.log(data);
    }

    const handleChange = (e) => {
        setuser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <>
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

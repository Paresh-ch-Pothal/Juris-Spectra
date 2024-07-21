import React, { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddLargeNews = () => {
    const [sections, setSections] = useState([{ id: 1, h1: '', sub1: '', link: '', table: '', desc: '' }]);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        homedesc: '',
        imglink: ''
    });

    const addSection = () => {
        setSections([
            ...sections,
            { id: sections.length + 1, h1: '', sub1: '', link: '', table: '', desc: '' }
        ]);
    };

    const handleChange = (e, index, field) => {
        const updatedSections = sections.map((section, i) =>
            i === index ? { ...section, [field]: e.target.value } : section
        );
        setSections(updatedSections);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://juris-spectra.vercel.app/api/addnewslarge`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: formData.title, author: formData.author, homedesc: formData.homedesc, imglink: formData.imglink, desc: sections })
        })

        const data = await response.json();
        // console.log(data);
        // // Handle form submission logic here, e.g., sending data to the server
        // console.log('Form Data:', formData);
        // console.log('Sections:', sections);
        if (data.success) {
            toast.success(data.message, {
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
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <div className="container">
            <ToastContainer
                position="top-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Heading</label>
                    <input type="text" className="form-control" id="title" name="title" onChange={handleFormChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" name="author" onChange={handleFormChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="homeDescription" className="form-label">Home Description</label>
                    <input type="text" className="form-control" id="homedesc" name="homedesc" onChange={handleFormChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageLink" className="form-label">Image Link</label>
                    <input type="text" className="form-control" id="imglink" name="imglink" onChange={handleFormChange} />
                </div>

                {sections.map((section, index) => (
                    <div key={section.id}>
                        <div className="mb-3">
                            <label htmlFor={`h1-${section.id}`} className="form-label">h1</label>
                            <input type="text" className="form-control" id={`h1-${section.id}`} onChange={(e) => handleChange(e, index, 'h1')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`sub1-${section.id}`} className="form-label">sub1</label>
                            <input type="text" className="form-control" id={`sub1-${section.id}`} onChange={(e) => handleChange(e, index, 'sub1')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`link-${section.id}`} className="form-label">link</label>
                            <input type="text" className="form-control" id={`link-${section.id}`} onChange={(e) => handleChange(e, index, 'link')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`table-${section.id}`} className="form-label">table</label>
                            <input type="text" className="form-control" id={`table-${section.id}`} onChange={(e) => handleChange(e, index, 'table')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`desc-${section.id}`} className="form-label">desc</label>
                            <input type="text" className="form-control" id={`desc-${section.id}`} onChange={(e) => handleChange(e, index, 'desc')} />
                        </div>
                    </div>
                ))}

                <button type="button" className="btn btn-primary mx-3 my-2" onClick={addSection}>Add More</button>
                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
    );
};

export default AddLargeNews;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const [values, setValues] = useState({
        name: "",
        email: ""
    });
    const [submitted, setSubmitted] = useState(false); // State to track submission status
    const navigate = useNavigate();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://52.66.204.139:4000/student', values)
            .then(res => {
                console.log(res);
                setSubmitted(true); // Set submitted state to true upon successful submission
                // navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
                <div className="w-50 bg-white rounded p-3">
                {submitted && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Congractulation!</strong> Data has been submitted successfuly!.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>}
                    <form onSubmit={handleSubmit}>
                        <h2>Add Student</h2>
                        <div className="mb-2">
                            <label htmlFor="">Name</label>
                            <input className="form-control" type="text" placeholder="Enter name" onChange={e => setValues({ ...values, name: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Email</label>
                            <input className="form-control" type="email" placeholder="Enter email" onChange={e => setValues({ ...values, email: e.target.value })} />
                        </div>

                        <button className="btn btn-success">Submit</button>

                        <Link to="/" className="btn btn-primary">HOME</Link>
                    </form>
                    {/* Display alert message if submission was successful */}
                    
                </div>
            </div>
        </>
    );
}

export default Create;

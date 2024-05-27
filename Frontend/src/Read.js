import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const Read = () => {

    const {id} =useParams();
    const [student, setStudent] = useState([])

    useEffect(() =>{
       axios.get(`http://52.66.204.139:4000/read/${id}`)
       .then(res => {
        console.log(res)
        setStudent(res.data[0]);
    })
       .catch(err => console.log(err))    
    }, [])

    
    return (
        <>
        <div className="container">

       <div className="row">    
        <h1>Student details</h1>
        <h1>{student.ID}</h1>
        <h3>{student.Name}</h3>
        <h3>{student.Email}</h3>
       <div className="col-3">
       <Link to="/" className="btn btn-primary ">Home</Link>
       <Link to={`/edit/${student.ID}`} className="btn btn-dark ">EDIT</Link>
       </div>
       
       </div>
        </div>
        
        
        
        
        </>
    );
}

export default Read
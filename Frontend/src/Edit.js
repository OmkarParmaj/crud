import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



const Edit = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    
    const [updated , setUpdated] = useState(false);


    useEffect(() =>{
        axios.get('http://www.textilediwanji.com:4000/read/'+id)
        .then(res => {
         console.log(res)
         setValues({...values, name:res.data[0].Name, email:res.data[0].Email})
     })
        .catch(err => console.log(err))    
     }, [])
    
const [values, setValues] = useState({
    name : '',
    email : ''
})
const handleUpdate = (event) => {
    event.preventDefault();
     axios.put('http://www.textilediwanji.com:4000/edit/' +id, values)
     .then(res => {
        console.log(res)
        setUpdated(true);
        // navigate('/')
     }).catch(err => console.log(err));
}


const gotopage = () => {
    navigate('/');
}
    return (
        <>
        
        
        <div className="d-flex vh-100 bg-primary justify-content-center  align-items-center ">
                <div className="w-50 bg-white rounded  p-3">
                {updated && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Congractulation!</strong> Data has been updated successfuly!.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={gotopage} aria-label="Close"></button>
                    </div>}
                    <form onSubmit={handleUpdate}>
                        <h2>Update Student</h2>
                        <div className="mb-2">
                            <label htmlFor="">Name</label>
                            <input className="form-control" value={values.name} type="text" placeholder="Enter name" onChange={e => setValues({...values, name: e.target.value})} />
 
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Email</label>
                            <input className="form-control" type="email" value={values.email} placeholder="Enter email" onChange={e => setValues({...values, email: e.target.value})} />
                        </div>

                        <button className="btn btn-success ">Update</button>


                        <Link to="/" className="btn btn-primary ">HOME</Link>
                    </form>
                </div>
                
            </div>

        
        
        
        </>
    );
}


export default Edit
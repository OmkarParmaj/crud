import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://www.textilediwanji.com:4000/')
      .then(res => {
        setData(res.data);
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  const handleDelete = (id) => {
    axios.delete('http://www.textilediwanji.com:4000/delete/' + id)
      .then(res => {
        // Refresh data after successful deletion
        fetchData();
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center">Student list</h1>
        <div className="d-flex justify-content-end mb-3">
          <Link to="/create" className="btn btn-success">Create +</Link>
        </div>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Read</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index}>
                <td>{student.ID}</td>
                <td>{student.Name}</td>
                <td>{student.Email}</td>
                <td><Link to={`/read/${student.ID}`} className="btn btn-success">Read</Link></td>
                <td><Link to={`/edit/${student.ID}`} className="btn btn-primary">Edit</Link></td>
                <td><button onClick={() => handleDelete(student.ID)} className="btn btn-danger">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


export default Home;

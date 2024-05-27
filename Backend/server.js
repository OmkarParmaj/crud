import express from 'express'
import mysql from 'mysql'

import cors from 'cors'

const app = express();

app.use(cors({
    origin: ['http://13.201.122.217'],
    methods: ["POST", "GET", "DELETE", "PATCH", "PUT"],
    credentials: true
}));
app.use(express.json());

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "crud"
})

app.get('/',(req,res) =>{
    const sql = "SELECT * FROM student";
    connection.query(sql, (err,result)=>{
        if(err) return res.json({message : "error inside server"});
        else return res.json(result);
        
    })
})

app.get('/getone', (req, res) => {
    res.send("listining")
})




app.post('/student', (req,res) => {
    const sql = "INSERT INTO student (`Name`,`Email`) VALUES (?)";
    const values =[
        req.body.name,
        req.body.email
    ]
    connection.query(sql, [values], (err,result) => {
        if(err) res.json(err);
        return res.json(result);
    })
})

app.get('/read/:id',(req,res) =>{
    const sql = "SELECT * FROM student WHERE ID = ?";
    const id = req.params.id;

    connection.query(sql,[id], (err,result)=>{
        if(err)  return res.json({message : "error inside server"});
        return res.json(result);
        
    })
})
    

app.put('/edit/:id',(req,res) =>{
    const sql = "UPDATE student SET `Name`=?, `Email`=? WHERE ID =?";
    const id = req.params.id;
    connection.query(sql, [req.body.name, req.body.email, id], (err,result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})


app.delete('/delete/:id', (req,res) => {
    const sql = "DELETE FROM student WHERE ID = ?";
    const id = req.params.id;
    connection.query(sql, [id], (err,result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

const port = 4000;
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})
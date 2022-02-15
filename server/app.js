const express  = require('express');
const morgan = require('morgan')
const cors = ('cors');
const bodyParser = require("body-parser");

const dotenv = require('dotenv');


const userRouter = require('../routers/userRouter');

// 3306

dotenv.config();

//initializations
const app = express();
app.use(express.urlencoded({extended: true }));
app.use(express.json());
// app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 


//MySQL Connection


//Middlewares
app.use(morgan('dev'));


//Routes

//users
app.use('/api/users', userRouter);



//emails
// app.use('/api/emails', emailRouter);





app.get('/', (req,res)=>{
    res.send('Server ready');
});


app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message})
});


module.exports =  app

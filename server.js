const express = require('express')
const cors=require('cors')
const morgan= require('morgan')
const colors=require('colors')
const dotenv = require('dotenv')
const connectDb = require('./config/connectDb')

dotenv.config();
connectDb();
const app=express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/api/v1/users', require('./routes/userRoute'));
app.use('/api/v1/transections', require('./routes/transectionRoutes'));
const PORT=8080|| process.env.PORT
app.listen(PORT,()=>{
    console.log('server started');
})
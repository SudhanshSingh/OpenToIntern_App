const express = require("express")
const dotenv = require('dotenv')
dotenv.config({path:"./.env"})
const bodyParser = require('body-parser');
const route = require('./routes/route');
const mongoose = require('mongoose');
const path=require("path")
const cors = require('cors')

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//cluster string

app.use(cors())
// console.log(path.resolve(process.env.PUBLIC_DIR))
app.use(express.static(path.resolve(process.env.PUBLIC_DIR)))
app.use("/", route)

mongoose.connect(process.env.MONGO_STRING, {
    useNewUrlParser: true
})
.then( ()=> console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.listen(process.env.PORT || 5000, (err)=> {
    console.log("Connected to PORT 5000")
})
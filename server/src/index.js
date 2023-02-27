const express = require("express")
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/route');
const mongoose = require('mongoose');
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//cluster string
mongoose.connect("mongodb+srv://Sudhanshu_09:5JQhJtJ5mUWQIBwo@cluster0.kt4fu.mongodb.net/OpenToIntern", {
    useNewUrlParser: true
})
.then( ()=> console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(cors())
app.use("/", route)

app.listen(process.env.PORT || 5000, (err)=> {
    console.log("Connected to PORT 5000")
})
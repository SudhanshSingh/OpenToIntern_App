const express = require('express');
const path=require("path")
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")



router.post("/functionup/colleges",collegeController.createCollege)

router.post("/functionup/interns",internController.createInterns)

router.get("/functionup/collegeDetails", collegeController.getcollege);

router.get("/functionup/allCollegeDetails",collegeController.getAllCollege)

router.all("*",function(req,res){
    res.sendFile(path.resolve("build","index.html"))
 });
module.exports = router;
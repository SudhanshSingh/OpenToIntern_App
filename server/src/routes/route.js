const express = require('express');
const path=require("path")
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")



router.post("/functionup/colleges",collegeController.createCollege)

router.post("/functionup/interns",internController.createInterns)

router.get("/functionup/collegeDetails", collegeController.getcollege);

router.get("/functionup/allCollegeDetails",collegeController.getAllCollege)

// router.all("*",function(req,res){
//     res.sendFile(path.resolve("build","index.html"))
//  });
//   console.log(path.resolve("build","index.html"))
// router.all("/*",function(req,res){
//     res.status(400).send({
//         status:false,msg:"The endpoint is not correct"
//     });
//   });
module.exports = router;
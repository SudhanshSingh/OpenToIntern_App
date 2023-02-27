const collegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value === Number && value.trim().length === 0) return false;
  return true;
};
////////////////////////////////////////////////////-----CREATE COLLEGE-------//////////////////////////////////////////////////////////////////
const createCollege = async function (req, res) {
  try {
    let data = req.body;

    if (!Object.keys(data).length) {
      return res
        .status(400)
        .send({ status: false, message: "You must enter data" });
    }
    if (!data.name)
      return res
        .status(400)
        .send({ status: false, message: "You must enter name" });

    if (!isValid(data.name)) {
      return res
        .status(400)
        .send({ status: false, message: "name should not be empty" });
    }
    if (typeof data.name != "string") {
      return res
        .status(400)
        .send({ status: false, message: "name should be string" });
    }

    if (!data.name.trim().match(/^[a-zA-Z]+$/)) {
      return res
        .status(400)
        .send({ status: false, message: "Enter a valid name." });
    }

    let checkName = await collegeModel.findOne({ name: data.name })
    if (checkName) { return res.status(400).send({ status: false, message: "This college is already registered" }) }

    if (!data.fullName)
      return res
        .status(400)
        .send({ status: false, message: "You must enter full name" });

    if (!isValid(data.fullName)) {
      return res
        .status(400)
        .send({ status: false, message: "full name should not be empty " });
    }

    if (typeof data.fullName != "string") {
      return res
        .status(400)
        .send({ status: false, message: "full Name should be string" });
    }

    if (!data.fullName.trim().match(/^[a-zA-Z,\-.\s]*$/)) {
      return res
        .status(400)
        .send({ status: false, message: "Enter a valid full name." });
    }

    if (!data.logoLink)
      return res
        .status(400)
        .send({ status: false, message: "You must enter logoLink" });

    if (!isValid(data.logoLink)) {
      return res
        .status(400)
        .send({ status: false, message: "logo link should not be empty" });
    }

    if (typeof data.logoLink != "string") {
      return res
        .status(400)
        .send({ status: false, message: "logo link should be string" });
    }

    if (
      !data.logoLink
        .trim()
        .match(
          /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)$/
        )
    )
      return res
        .status(400)
        .send({ status: false, message: "Enter a valid logo link" });

    let created = await collegeModel.create(data);
    res.status(201).send({ status: true,message:"college craeted successfully", data: created });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

////////////////////////////////////////////////////-----GET COLLEGE DETAILS-------//////////////////////////////////////////////////////////////////

const getcollege = async function (req, res) {
  try {
    const collegeName = req.query.collegeName;
    console.log((collegeName))

     if (!collegeName) { return res.status(400).send({ message: "plzz provide collegeName" }) }

    if (!isValid(collegeName)) {
      return res
        .status(400)
        .send({ status: false, message: "College Name should not be empty " });
    }

    if (!collegeName.trim().match(/^[a-zA-Z]+$/)) {
      return res
        .status(400)
        .send({ status: false, message: "Enter a valid college name." });
    }

    const details = await internModel.find().populate("collegeId");
    console.log("PRINT", details)

    let allinterns = [];
    const allinterns1 = details.map((x) => {
      if (x.collegeId.name == collegeName.toLowerCase()) {
        allinterns.push(x);
      }
      return allinterns;
    });
   
    if (!allinterns1[0][0]) {
      return res.status(404).send({ status: true, message: "no data found" });
    }
    console.log("kuchbhi", allinterns);

    interns = [];
    for (i = 0; i < allinterns.length; i++) {
      a = {
        _id: allinterns[i]._id,
        name: allinterns[i].name,
        email: allinterns[i].email,
        mobile: allinterns[i].mobile,
      };

      interns.push(a);
    }

     // console.log(interns);

      let dataToFetch = {
        name: allinterns[0].collegeId.name,
        fullName: allinterns[0].collegeId.fullName,
        logoLink: allinterns[0].collegeId.logoLink,
        interns: interns,
      };
     // console.log(dataToFetch);

      return res.status(200).send({ status: true, message: dataToFetch });
    
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const getAllCollege= async(req,res)=>{
  try{

    let data=await collegeModel.find()
    return res.status(200).send({status:true,message:'All college details',data:data})
  }catch(err){
   return res.status(500).send({status:false,message:err.message})
  }
}

module.exports.createCollege = createCollege;
module.exports.getcollege = getcollege;
module.exports.getAllCollege=getAllCollege

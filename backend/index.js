const port = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require ("cors");




// Database conn with mongo db 
 // mongoose.connect("mongodb+srv://praneshkatariya16:1234567898Aa@@cluster0.vxawfoo.mongodb.net/e-commerce")

 // API creation

app.get("/" , (req,res)=>{
    res.send("express app")
})

// image storage engine 

const storage = multer.diskStorage({
    destination : './upload/images',
    filename: (req, file ,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({ storage : storage }) 

// creating upload end point  for images
app.use('/images', express.static('upload/images'))

app.post("/upload" , upload.single('product'),(req,res)=>{
    res.json({
        success: 1 ,
        image_url : `http://localhost:${port}/images/${req.file.filename}`
    })
})

 app.listen(port , (error)=> {
    if(!error)
    {
        console.log("serve running")

    }
    else{
        console.log("error " + error)
    }
 })
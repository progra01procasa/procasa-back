const express = require('express');
const router = express.Router();
const cloudinary = require("../../libs/cloudinary");



 
function uploadImege (req, res)  {
    cloudinary.uploader.upload(req.file.path, function (err, result){
      if(err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Error"
        })
      }
  
      res.status(200).json({
        success: true,
        message:"Uploaded!",
        data: result
      })
    })
  };


  module.exports = {
    uploadImege
  }
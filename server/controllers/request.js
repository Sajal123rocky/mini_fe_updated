const Request = require("../models/request");
const { StatusCodes } = require("http-status-codes");
const { uploadImage } = require('../cloudinaryApis/createImage');

const createRequest = async(req , res) =>{
    console.log("entered create request controller") ;
    const file = req.files.photo ;
    const imageLink = await uploadImage(file) ;
    req.body.billProofLink =  imageLink ;
    const newRequest = await Request.create(req.body) ;
    res.status(StatusCodes.OK).json(newRequest) ;
}

const fetchAllRequests = async(req , res) =>{
    const requests = await Request.find();
    res.status(StatusCodes.OK).json(requests) ;
}

module.exports = {
 createRequest,
 fetchAllRequests,
}
const Request = require('../models/todomodels')
const mongoose = require('mongoose');

//get all requests

const getallRequest = async(req,res) => {
  const requests = await Request.find({}).sort({createdAt: -1})

  res.status(200).json(requests)
}

//get a single request

const getRequest = async(req,res) => {
  const id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such request"})
  }

  const request = await Request.findById(id)

  if (!request) {
    return res .status(404).json({ message: 'Request not found' })
}
res.status(200).json(request)
}

//create new request

const createRequest = async(req,res) => {
  //add document to db
  try {
    const { work } = req.body;
    const request = await Request.create({ work });
    return res.status(201).json(request);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

//delete a request

const deleteRequest = async (req,res)=>{
  const id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Np such request"})
  }

  const request = await Request.findByIdAndDelete({_id:id})

  if (!request){
    return res.status(400).json({error:"no such request"})
  }
  res.status(200).json({message:"request deleted"})
}

//update a request

const updateRequest = async (req,res) => {
  const id = req.params.id
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Np such request"})
  }
const request = await Request.findByIdAndUpdate({_id:id},{
  $set:req.body
})

if(!request){
  return res.status(400).json({error: "No such request"})
}
res.status(200).json({message: "request updated"})
}

module.exports = {
  getallRequest,
  getRequest,
  createRequest,
  deleteRequest,
  updateRequest
};
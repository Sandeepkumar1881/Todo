const express = require('express');
const router = express.Router();

const {getallRequest,
  getRequest,
  createRequest,
  deleteRequest,
  updateRequest
} = require('../Controllers/todocontroller')


//Get all to do requests
router.get('/',getallRequest) 


//get a single request

router.get('/:id', getRequest);

//Post a request

router.post('/',createRequest)

//delete a request

router.delete('/:id',deleteRequest)

//update a request

router.patch('/:id',updateRequest)


module.exports = router


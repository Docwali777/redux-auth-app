const express = require('express');
const router = express.Router()

import validateInput from '../src/shared/signup'



router.post('/', (req, res)=>{
const { errors, isValid } = validateInput(req.body)
if(isValid){
  res.json({success: true})
}
else {
  res.status(400).json(errors)
}
})

export default router

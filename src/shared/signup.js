const Validator = require('validator');
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'

const validateInput = (data) =>{
  let errors = {}

  if(Validator.isEmpty(data.email) || !Validator.isEmail(data.email)){
    errors.email = 'Please use a Valid email address'
  }


  if(Validator.isEmpty(data.password)){
    errors.password = 'The field is Required'
  }

  if(Validator.isEmpty(data.confirmpassword)){
    errors.confirmpassword = 'The field is Required'
  }

if(!Validator.equals(data.password, data.confirmpassword)){
  errors.confirmpassword = 'Passwords must match'
}

  if(Validator.isEmpty(data.username)){
    errors.username = 'The field is Required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
export default validateInput

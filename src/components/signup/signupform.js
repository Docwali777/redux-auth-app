import React, { Component} from 'react'
import classnames from 'classnames'

import validateInput from '../../shared/signup'

class SignupForm extends Component{
constructor(props){
  super(props)
  this.state ={
    username: '',
    password: '',
    confirmpassword: '',
    email: '',
    errors: {},
    isLoading: false
  }
  console.log(this.props);
}
onChange =(e) =>{
  this.setState({[e.target.name]: e.target.value})

}

isValid = () =>{
const {errors, isValid } =   validateInput(this.state)

if(!isValid){
  this.setState({errors})
}

return isValid
}

onSubmit =(e) =>{
  this.setState({erros: {}, isLoading: true })
  e.preventDefault();
if(this.isValid()){
  this.props.userSignupRequest(this.state)
.catch( error =>{
  if(error.response){
    console.log(error.response.data);
    this.setState({errors: error.response.data, isLoading: false})
  }
})

}

}


  render(){
  const {errors} = this.state
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Join Our COmmunity</h1>

        <div className={classnames('form-group', {'has-error': errors.username})}>
          <label className='control-label'>Username</label>
          <input
              type='text'
              value={this.state.username}
              name='username'
              placeholder='Enter User Name'
              className='form-control'
              onChange={this.onChange}
           />
           {errors.username && <span className='help-block danger'>{errors.username}</span>}
         </div>

<div className={classnames('form-group', {'has-error': errors.email})}>
  <label className='control-label'>Email</label>
  <input
      type='text'
      value={this.state.email}
      name='email'
      placeholder='Enter email'
      className='form-control'
      onChange={this.onChange}
   />
{errors.email && <span className='help-block danger'>{errors.email}</span>}
</div>


             <div className={classnames('form-group', {'has-error': errors.password})}>
               <label className='control-label'>password</label>
               <input
                   type='text'
                   value={this.state.password}
                   name='password'
                   placeholder='Enter password'
                   className='form-control'
                   onChange={this.onChange}
                />
                {errors.password && <span className='help-block danger'>{errors.password}</span>}
             </div>



              <div className={classnames('form-group', {'has-error': errors.confirmpassword})}>
                <label className='control-label'>Confirm Password</label>
                <input
                    type='text'
                    value={this.state.confirmpassword}
                    name='confirmpassword'
                    placeholder='Enter password'
                    className='form-control'
                    onChange={this.onChange}
                 />
{errors.confirmpassword && <span className='help-block danger'>{errors.confirmpassword}</span>}

        </div>

        <div className='form-group'>
          <button disabled={this.state.isLoading} className='btn btn-success'> Submit</button>
        </div>
      </form>
    )
  }
}


export default SignupForm

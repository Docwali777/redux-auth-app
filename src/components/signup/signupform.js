import React, { Component} from 'react'

class SignupForm extends Component{
constructor(props){
  super(props)
  this.state ={
    username: '',
    password: '',
    confirmpassword: '',
    email: ''
  }
  console.log(this.props);
}
onChange =(e) =>{
  this.setState({[e.target.name]: e.target.value})

}

onSubmit =(e) =>{
  e.preventDefault();
this.props.userSignupRequest(this.state)
}


  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Join Our COmmunity</h1>
        <div className='form-group'>
          <label className='control-label'>username</label>
          <input
              type='text'
              value={this.state.username}
              name='username'
              placeholder='Enter User Name'
              className='form-control'
              onChange={this.onChange}
           />


            <label className='control-label'>email</label>
            <input
                type='text'
                value={this.state.email}
                name='email'
                placeholder='Enter email'
                className='form-control'
                onChange={this.onChange}
             />

             <label className='control-label'>password</label>
             <input
                 type='text'
                 value={this.state.password}
                 name='password'
                 placeholder='Enter password'
                 className='form-control'
                 onChange={this.onChange}
              />

              <label className='control-label'>Confirm Password</label>
              <input
                  type='text'
                  value={this.state.confirmpassword}
                  name='confirmpassword'
                  placeholder='Enter password'
                  className='form-control'
                  onChange={this.onChange}
               />

        </div>

        <div className='form-group'>
          <button className='btn btn-success'> Submit</button>
        </div>
      </form>
    )
  }
}


export default SignupForm

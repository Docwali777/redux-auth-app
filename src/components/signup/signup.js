import React, { Component} from 'react'
import SignupForm from './signupform'
import { connect } from 'react-redux'
import { userSignupRequest } from '../../actions/signupactions'
import { addFlashMessages } from '../../actions/flashmessages'

class Signup extends Component{

  render(){
    const { userSignupRequest, addFlashMessages } = this.props
    return(
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <SignupForm userSignupRequest={userSignupRequest} addFlashMessages={addFlashMessages} />
        </div>
      </div>
    )
  }
}

Signup.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessages: React.PropTypes.func.isRequired
}

export default connect(null,{ userSignupRequest, addFlashMessages} )(Signup)

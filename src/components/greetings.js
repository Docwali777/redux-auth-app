import React, { Component} from 'react'

import { connect } from 'react-redux'

class Greetings extends Component{
  render(){
    const {text } = (this.props.info);
    return(
      <div>
        <h1>Greetings</h1>
        {text}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    info: state.flashMessages
  }
}
export default connect(mapStateToProps)(Greetings)

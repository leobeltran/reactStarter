import React, {PropTypes} from 'react';

export default React.createClass({
  render (){
    return(
      <div>
      <input onChange={this.props.handleEmailChange}/>
        <button onClick={this.props.fetchGravatar}>send</button>
      </div>
    )
  }
})

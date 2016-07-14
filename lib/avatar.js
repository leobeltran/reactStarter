import React from 'react'

export default React.createClass({
  render (){
    return(
      <div>
        <p>{this.props.email}</p>
        <img src={this.props.src}/>
      </div>
    )
  }
})

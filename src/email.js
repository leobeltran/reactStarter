import React, {PropTypes} from 'react';

export default React.createClass({
  render (){
    const {handleEmailChange, fetchGravatar} = this.props

    return(

      <div className= 'control'>

      <div className='control'>
      <input
        onChange={handleEmailChange}
        className='input'
        style={styles}
      />

      </div>

      <div className='control'>
      <button
        onClick={fetchGravatar}
        className='button is-primary'
        >send</button>

      </div>

      </div>
    )
  }
})


const styles = {
  width: 200,
}

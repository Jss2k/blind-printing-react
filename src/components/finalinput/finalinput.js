import React from 'react'

import './styles.scss'

const FinalInput = () => {

  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
  <div className="final-input">
    <p className="title">Congratulations! The test is over!</p>
    <div className="call-to-action">
      <button onClick={refreshPage}>
        Take the test again
      </button>
    </div>
  </div>
  )
}

export default FinalInput
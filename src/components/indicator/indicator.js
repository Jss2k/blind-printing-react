import React from 'react'
import './styles.scss'

const Indicator = ({ caption, value }) => {
  return (
    <div className="indicator">
      <p className="caption">{caption}</p>
      <p className="value">{value}</p>
  </div>
  )
}

export default Indicator
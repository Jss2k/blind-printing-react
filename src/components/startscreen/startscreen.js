import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const StartScreen = props => {
  return (
    <div className="start-screen">
      <div className="wrap">
        <div className="main">
          <div className="title" >
            Take a free typing test
          </div>
          <div className="subtitle" >
            Enter a short piece of text to see how fast you can type. Check your typing speed in wpm in English, Russian. To improve your score you can prepare for the test with the help of our guide.
          </div>
          <div className="call-to-action">
            <Link to="/learn">
              <span>Learn how to type text</span>
            </Link>
            <Link to="/test">
              <span>Take the typing test</span>
            </Link>
          </div>
       </div>
      </div>
    </div>
  )
}

export default StartScreen
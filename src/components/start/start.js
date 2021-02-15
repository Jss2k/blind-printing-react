import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from './../UI/button'

import './styles.scss'

import startTest from './../../assets/startTest.png'

const Start = props => {
  const history = useHistory()

  return (
    <section className="start">
      <div className="main">
        <div className="wrap">
          <div className="title">
            <span>Start typing now</span>
          </div>
          <div className="subtitle">
            <p>We measure your typing speed in WPM (words per minute). It is a calculation of how fast you type words with no typos. We mean by the «word» an average of 5 characters including spaces. We measure gross speed in our typing test.</p>
            <p>However, we don’t allow you to continue typing if you have a typo in your test. You have to fix it to proceed with the WPM test.</p>
          </div>
            <Button className="btn start-btn" onClick={() => history.push('/test')}>
              start typing now
            </Button>
          <div className="start-img">
            <img src={startTest} alt="start typing now" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Start
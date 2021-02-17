import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { addResultStart } from '../../redux/Results/results.action'

import { useTyping } from './../../state/context';
import { wpmGross , wpmNet } from './../../Utils/countCorrectCharacters';

import Indicator from './../indicator/indicator';

import './styles.scss'

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const PanelInfo = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(mapState)
  const { state: { characters, seconds, textLength, errors, allErrors }  } = useTyping()
  let netWPM = wpmNet(characters, seconds, errors) || 0
  let grossWPM = wpmGross(characters, seconds) || 0

  let leftChar = textLength - (characters + errors)
  let accuracy = (((textLength - allErrors) / textLength) * 100).toFixed(2) || 100

  useEffect(() => {
    if ((characters + errors) === textLength && textLength !== 0) {
      return dispatch(
        addResultStart({
          netWPM,
          grossWPM,
          accuracy,
          resultUserUID: currentUser.id
        })
      )
    }

  }, [leftChar])

  return (
    <div className="indicators">
      <Indicator caption={"Time"} value={seconds}/>
      <Indicator caption={"characters left"} value={leftChar }/>
      <Indicator caption={"gross wpm"} value={grossWPM}/>
      <Indicator caption={"Accuracy"} value={accuracy}/>
      <Indicator caption={"net wpm"} value={netWPM}/>
    </div>
  )
}

export default PanelInfo
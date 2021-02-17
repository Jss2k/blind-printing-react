  
import React from 'react';

import { wpmGross , wpmNet } from './../../Utils/countCorrectCharacters';
import { useTyping } from './../../state/context';
import Indicator from './../indicator/indicator';

import './styles.scss'

const PanelInfo = () => {
  const { state: { characters, seconds, textLength, errors, allErrors }  } = useTyping();
  let netWPM = wpmNet(characters, seconds, errors) || 0
  let grossWPM = wpmGross(characters, seconds) || 0

  let leftChar = textLength - (characters + errors)
  let accuracy = (((textLength - allErrors) / textLength) * 100).toFixed(2) || 100

  return (
    <div className="indicators">
      <Indicator caption={"Time"} value={seconds}/>
      <Indicator caption={"characters left"} value={leftChar }/>
      <Indicator caption={"gross wpm"} value={grossWPM}/>
      <Indicator caption={"Error"} value={accuracy}/>
      <Indicator caption={"net wpm"} value={netWPM}/>
    </div>
  )
}

export default PanelInfo
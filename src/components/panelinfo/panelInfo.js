  
import React from 'react';

import { wpmNormal } from './../../Utils/countCorrectCharacters';
import { useTyping } from './../../state/context';
import Indicator from './../indicator/indicator';

const PanelInfo = () => {
  const { state: { characters, seconds }  } = useTyping();
  return (
    // <div className='typing-speed'>
    //   Typing speed
    //   <div>{seconds}</div>
    //   <div>WPM: {wpmNormal(characters, seconds)}</div>
    //   <div>Correct characters: {characters}</div>
    //   <button onClick={onReset}>Reset</button>
    // </div>
    <div className="indicators">
      <Indicator caption={"Total"} value={characters}/>
      <Indicator caption={"WPM"} value={wpmNormal(characters, seconds)}/>
      <Indicator caption={"Time"} value={seconds}/>
    </div>
  )
}

export default PanelInfo
import React from 'react'

import FinalInput from './../finalinput/finalinput'
import UserInput from './../userInput/userInput'
import { useTyping } from './../../state/context'

const InputDisplay = () => {
  const { state: { characters, textLength, errors } } = useTyping()


  return (
    ((characters + errors) === textLength && textLength !== 0)

    ? <FinalInput /> 
    : <UserInput />
  )


}

export default InputDisplay
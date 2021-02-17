  import React from 'react'

import { useTyping } from './../../state/context'

const UserInput = () => {
  const {
    state: { input, textLength }, onInput} = useTyping()

  return (
    <textarea
      rows={7}
      value={input}
      autoFocus
      maxLength={textLength}
      onChange={(e) => onInput(e.target.value)}
    />
  )
}

export default UserInput
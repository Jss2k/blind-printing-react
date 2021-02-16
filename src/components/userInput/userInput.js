  
import React from 'react';

import { useTyping } from './../../state/context';

const UserInput = () => {
  const {
    state: { input },
    onInput,
  } = useTyping();

  return (
    <textarea
      rows={7}
      value={input}
      autoFocus
      onChange={(e) => onInput(e.target.value)}
    />
  )
}

export default UserInput
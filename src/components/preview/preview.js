
import React, {useState,  useEffect } from 'react';
import { useTyping } from './../../state/context';

const Preview = () => {
  const { state: { text, input }, getText} = useTyping()


  useEffect(() => {
    if(text === ' ')
    getText()
  }, [getText])

  const previewText = text.split('').map((symbol, i) => {
    let color = ''

    if (i < input.length) {
      color = symbol === input[i] ? 'green' : 'red';
    }
    return (
      <span key={`${symbol}_${i}`} className={color}>
        {symbol}
      </span>
    )
  })
  return (

<div className='preview'>{previewText}</div>
 
  )
}

export default Preview
import React from 'react'

import './styles.scss'

const TextGenerator = ({ paragraphs }) => {
  return (
    <div className="output">
      {(<p>{paragraphs.map((p) => paragraphs)}</p>)}
    </div>
  )
}

export default TextGenerator
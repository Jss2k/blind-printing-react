import React, { useState, useEffect } from 'react'
import Output from './../UI/output'

import './styles.scss'

const TextGenerator = props => {
  const [paragraphs, setParagraphs] = useState([])
  const paragraphsNumber = 1


  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${paragraphsNumber}&start-with-lorem=1`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setParagraphs(data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="text-generator">
      <Output paragraphs={paragraphs} />
    </div>
  )
}

export default TextGenerator
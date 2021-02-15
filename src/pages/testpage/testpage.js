import React from 'react'
import TextGenerator from '../../components/textgenerator/textgenerator'



import './styles.scss'

const Testpage = props => {
  return (
    <section className="test-page">
      <div className="main">
        <div className="wrap">
          <TextGenerator />

        </div>
      </div>
    </section>
  )
}

export default Testpage
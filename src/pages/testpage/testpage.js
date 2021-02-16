// import React from 'react'
// import TextGenerator from '../../components/textgenerator/textgenerator'



// import './styles.scss'

// const Testpage = props => {
//   return (
//     <section className="test-page">
//       <div className="main">
//         <div className="wrap">
//           <TextGenerator />

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Testpage

  
import React from 'react';
// import Indicator from './../../components/indicator/indicator'
import { TypingProvider } from './../../state/index';
import UserInput from './../../components/userInput/userInput';
import Preview from './../../components/preview/preview';
// import { words, wpmNormal } from './../../Utils/countCorrectCharacters';
// import { useTyping } from './../../state/context';
import PanelInfo from './../../components/panelinfo/panelInfo';

const Testpage = () => {
  return (
    <TypingProvider>
      <div className="main test-page">
        <h1 className="title">Typing Speed Test</h1>
        <div className='container'>
          <div className='typing-test'>
            <Preview />
            <UserInput />
          </div>
        </div>
        <PanelInfo />
      </div>
    </TypingProvider>
  )
}
export default Testpage
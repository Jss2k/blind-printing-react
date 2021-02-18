import React from 'react';
import { TypingProvider } from './../../state/index';
// import UserInput from './../../components/userInput/userInput';
import Preview from './../../components/preview/preview';
import PanelInfo from './../../components/panelinfo/panelInfo';
import InputDisplay from './../../components/inputdisplay/inputdisplay';

const Testpage = () => {
  return (
    <TypingProvider>
      <div className="main test-page">
        <h1 className="title">Typing Speed Test</h1>
        <div className='container'>
          <div className='typing-test'>
            <Preview />
            <InputDisplay />
          </div>
        </div>
        <PanelInfo />
      </div>
    </TypingProvider>
  )
}
export default Testpage
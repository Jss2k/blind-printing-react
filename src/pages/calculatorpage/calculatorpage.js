import './styles.scss'
import net from './../../assets/net_wpm.png'
import gross from './../../assets/gross_wpm.png'

const Calculatorpage = props => {

  return (
    <section className="learn-page">
      <div className="main">
        <h1 className="title">WPM calculator</h1>
        <p>There are some formulas and typing equations used to calculate your typing statistics during</p>
        <p>
          When typing speed is calculating, a word that contains five characters.
          Except keys such as backspace or shift to work, all other characters are counted, including spaces, letters, numbers, and punctuation.
          This way, it is easier to calculate all the numbers in the word. To get the number of words you type, simply count all the typed entries and divide them into 5.
        </p>
        <img className="image net-wpm" src={net} alt="net wpm"></img>
        <p>
          Furthermore, a Net WPM calculation formula for measuring typing speed is considered more accurate.
          In the Gross formula, all your typing mistakes included will give you a complete picture of your true typing abilities.
          But in Net WPM calculation, Gross WPM is used to provide more accurate results.
        </p>
        <p>
          Net WPM is a more accurate and useful tool in gauging typing abilities.
          Typing mistakes play a part in its calculation, so it also measures your typing productivity instead of count only typing speed.
          In other words, if you are a fast typist but make a mistake, you will get a lower WPM score than a slower but more accurate typist.
        </p>
        <img className="image gross-wpm" src={gross} alt="gross wpm"></img>
      </div>
    </section>
  )
}

export default Calculatorpage
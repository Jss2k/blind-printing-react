import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect
} from 'react';
import { useHistory } from 'react-router-dom'
import { initialState, reducer, ActionTypes } from './state';

export const typingContext = createContext ([
  initialState,
  () => {},
])

export const TypingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <typingContext.Provider value={[state, dispatch]}>
      {children}
    </typingContext.Provider>
  )
}

export const useTyping = () => {

  const history = useHistory()
  const [state, dispatch] = useContext(typingContext);
  const [paragraphs, setParagraphs] = useState(' ')

  const paragraphsNumber = 1

  const url = `https://baconipsum.com/api/?type=all-meat&paras=${paragraphsNumber}&start-with-lorem=1`
  
  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then(data => setParagraphs(data.join('')))
      .catch(err => console.log(err));
  }
  
    useEffect(() => {
      fetchData();
    }, [])

  const checkCyrillic = (str) => {
    return /[а-я]/i.test(str)
  }

  const getText = () => {
    dispatch({ type: ActionTypes.GET_TEXT, payload: paragraphs })
  }

  const onInput = (value) => {
    
    if (checkCyrillic(value)) {
      alert('Please change your keyboard layout to English.')
      return stopTimer()
    } 
    
    if (!state.timerId) {
      startTimer()
    }

    if (state.input.length >= state.text.length ) {
      stopTimer()
    }
    dispatch({ type: ActionTypes.CHANGE_INPUT, payload: value })
  }

  const startTimer = () => {
    const timerId = setInterval(
      () => dispatch({ type: ActionTypes.TICK }),
      1000
    )
    dispatch({ type: ActionTypes.SET_TIMER, payload: timerId })
  }

  const stopTimer = () => {
    clearInterval(state.timerId);
    dispatch({ type: ActionTypes.SET_TIMER })
  }

  const onReset = () => {
    stopTimer();
    dispatch({ type: ActionTypes.CHANGE_INPUT, payload: '' })
  }

  return { state, onInput, onReset, getText }
}
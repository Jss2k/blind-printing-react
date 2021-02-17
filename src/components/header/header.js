import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUserStart } from './../../redux/User/user.actions'
import './styles.scss'

import Logo from './../../assets/logoBMP.png'

const mapState = (state) => ({
  currentUser: state.user.currentUser
})

const Header = props => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(mapState)


  const signOut = () => {
    dispatch(signOutUserStart())
  }

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} alt="Blind method" />
          </Link>
        </div>


      <nav className="mobile-menu">
        <ul>
          <li>
            <Link className="header-link" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/wpm-calculator">
              <span>Calculator</span>
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/test/start">
              <span>Test</span>
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          {!currentUser && [
            <li key={1}>
              <Link className="header-link" to="/registration">
                  <span>Register</span>
              </Link>
            </li>,
            <li key={2}>
              <Link className="header-link" to="/login">
                <span>Login</span>
              </Link>
            </li>
          ]}

          {currentUser && [
            <li key={1}>
              <Link className="header-link" to="/results">
                <span>Results</span>
              </Link>
            </li>,
            <li key={2}>
              <a className="header-link" onClick={() => signOut()}>
                <span>Logout</span>
              </a>
            </li>
          ]}

          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.defaultProps = {
  currentUser: null
}

export default Header;
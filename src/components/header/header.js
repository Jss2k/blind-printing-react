import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import Logo from './../../assets/logo.png'

const Header = props => {

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
              Home
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/learn">
              Learn
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/test">
              Typing test
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>

          <li>
             <Link className="header-link" to="/registration">
               Register
             </Link>
          </li>
          <li>
            <Link className="header-link" to="/login">
              Login
            </Link>
          </li>

          {/* <li>
            <Link className="header-link" to="/results">
              My Results
            </Link>
          </li>
          <li>
            <a className="header-link" onClick={() => signOut()}>
              LogOut
            </a>
          </li> */}

        </ul>
      </nav>


      </div>
    </header>
  )
}

export default Header;
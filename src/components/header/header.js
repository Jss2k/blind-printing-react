import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import Logo from './../../assets/logoBMP.png'

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
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/learn">
              <span>Learn</span>
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/test/start">
              <span>Typing test</span>
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>

          <li>
             <Link className="header-link" to="/registration">
                <span>Register</span>
             </Link>
          </li>
          <li>
            <Link className="header-link" to="/login">
              <span>Login</span>
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
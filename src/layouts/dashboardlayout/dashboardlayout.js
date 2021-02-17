import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOutUserStart } from './../../redux/User/user.actions'

import Header from './../../components/header/header'
import VerticalNav from './../../components/verticalnav/verticalnav'
import Footer from './../../components/footer/footer'

import Background from './../../assets/blindPrint.jpg'

const DashBoardLayout = props => {
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(signOutUserStart())
  }

  return (
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="overlay">
          <img className="background" src={Background} alt="blind print method" />
        </div>
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/test">
                  Test Again
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DashBoardLayout
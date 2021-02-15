import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

import Background from './../../assets/blindPrint.jpg'

import './styles.scss'

const MainLayout = props => {
  return (
    <div className="fullHeight">
      <Header {...props} />
        <div className="overlay">
          <img className="background" src={Background} alt="blind print method" />
        </div>
          {props.children}
      <Footer />
    </div>
  )
}

export default MainLayout
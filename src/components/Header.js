import React from 'react';
import './css/Header.css'
const Header = ({ title, subTitle }) => {
  return (
    <div>
      <div className="header">
        <h1 className="main-title">{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    </div> 
  )
}

export default Header;
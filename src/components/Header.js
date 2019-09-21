import React from 'react';

import './../styles/Header.css'

const Header = ({ title, subTitle, class_name }) => {
  return (
    <div className={class_name}>
      <h1 className="title">{title}</h1>
      <h2 className="subTitle">{subTitle}</h2>
    </div>
  )
}

export default Header;
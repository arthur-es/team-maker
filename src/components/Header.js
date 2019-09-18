import React from 'react';

const Header = ({ title, subTitle }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    </div> 
  )
}

export default Header;
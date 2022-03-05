import React from 'react';

const Header = () => {
  return (
    <header className="Header">
      <div className='Header__container__text'>
        <h1 className='Header__container__text__title'>A modern publishing platform</h1>
        <p className='Header__container__text__subtitle'>Grow your audience and build your online brand</p>
      </div>
      <div className='Header__container__buttons'>
        <button className='Header__container__button'>Start for Free</button>
        <button className='Header__container__button'>Learn More</button>
      </div>
    </header>
  )
}

export default Header;
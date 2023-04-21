import React from 'react'
import '../styles/header.scss'

const Header=()=> {
  return (
    <div className='header-container'>
        <div className='menu-bar'>
            <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className='header-actions'>
            <i class="fa fa-search" aria-hidden="true"></i>
            <i class="fa fa-globe" aria-hidden="true"></i>
            <i class="fa fa-bell-o" aria-hidden="true"></i>
            <i class="fa fa-envelope-o f-2" aria-hidden="true"></i>
        </div>
        <div className='header-user-profile'>
            <div className='profile-image' />
            <div className='header-user-info'>
                <div className='header-user-name'>John Carter</div>
                <div className='header-user-des'>Absolute Awnings</div>
            </div>
        </div>
    </div>
  )
}

export default Header

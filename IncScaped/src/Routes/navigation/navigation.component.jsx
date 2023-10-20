import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import CrwnLogo from '../../assets/crown.svg'
import './navigation.styles.scss'
export default function Navigation() {  
    return(
      <>
        <div className='navigation'>
            <Link className='logo-container' to="/">
                <CrwnLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to="/write">RAKSTĪT</Link>
                {false?(
                  <span className='nav-link' onClick={()=>{}}>SIGN OUT</span>
                ):(<Link className='nav-link' to="/auth">SIGN IN</Link>
                )}                
            </div>
        </div>
        <Outlet/>
      </>
    )
  }

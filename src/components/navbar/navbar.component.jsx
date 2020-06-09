import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.styles.scss'
const Navbar = () => {

    const [showMenu , setShowMenu] = useState(false)
    const onMenuClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='header'>
            <div onClick={onMenuClick} className='menu-btn'>
                <span className={`menu-btn__burger ${showMenu ? 'open' : ''} `}></span>
            </div>
            <nav className={`nav  ${showMenu ? 'open' : ''}`}>
                <ul className={`menu-nav ${showMenu ? 'open' : ''}`}>
                    <li className={`menu-nav__item ${showMenu ? 'open' : ''}`}>
                        <Link to='/' className="menu-nav__link active">HOME</Link>
                    </li>
                    <li className={`menu-nav__item ${showMenu ? 'open' : ''}`}>
                        <Link to='/about' className="menu-nav__link">ABOUT ME</Link>
                    </li>
                    <li className={`menu-nav__item ${showMenu ? 'open' : ''}`}>
                        <Link to='/projects' className="menu-nav__link">MY PROJECTS</Link>
                    </li>
                    <li className={`menu-nav__item ${showMenu ? 'open' : ''}`}>
                        <Link to='/contact' className="menu-nav__link">CONTACT ME</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

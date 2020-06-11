import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.styles.scss'
const Navbar = () => {

    const [showMenu , setShowMenu] = useState(false)
    const onMenuClick = () => {
        setShowMenu(!showMenu)
    }

    const [active , setActive] = useState('Home')

    return (
        <div className='header'>
            <div onClick={onMenuClick} className='menu-btn'>
                <span className={`menu-btn__burger ${showMenu ? 'open' : ''} `}></span>
            </div>
            <nav className={`nav  ${showMenu ? 'open' : ''}`}>
                <ul className={`menu-nav ${showMenu ? 'open' : ''}`}>
                    <li className={`menu-nav__item ${showMenu ? 'open' : ''}`}>
                        <Link onClick={() => setActive('Home')} to='/' className={`menu-nav__link ${active === 'Home' ? 'active' : ''}`}>HOME</Link>
                    </li>
                    <li className={`menu-nav__item ${showMenu ? 'open' : ''}`}>
                        <Link onClick={() => setActive('About')} to='/about' className={`menu-nav__link ${active === 'About' ? 'active' : ''}`}>ABOUT ME</Link>
                    </li>
                    <li className={`menu-nav__item ${showMenu ? 'open' : ''}`}>
                        <Link onClick={() => setActive('Projects')} to='/projects' className={`menu-nav__link ${active === 'Projects' ? 'active' : ''}`}>MY PROJECTS</Link>
                    </li>
                    <li className={`menu-nav__item ${showMenu ? 'open' : ''}`}>
                        <Link onClick={() => setActive('Contact')} to='/contact' className={`menu-nav__link ${active === 'Contact' ? 'active' : ''}`}>CONTACT ME</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

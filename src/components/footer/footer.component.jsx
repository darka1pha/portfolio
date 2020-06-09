import React from 'react'
import './footer.styles.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="social-icons">
                <a href='#'>
                    <i className="fab fa-twitter fa-2x" />
                </a>
                <a href='#'>
                    <i className="fab fa-telegram fa-2x" />
                </a>
                <a href='#'>
                    <i className="fab fa-instagram fa-2x" />
                </a>
                <a href='#'>
                    <i className="fab fa-github fa-2x" />
                </a>
            </div>
                &copy; Copyright 2020 | DarkAlpha
        </div>
    )
}

export default Footer

import React from 'react'
import './home.styles.scss'

const Home = () => {
    return (
        <div class='home'>
            <h2>Hi! my name is</h2>
            <h1 className="home__name">
                Abolfazl 
                <span className="home__name--last">
                    <t/>Omrani
                </span>
            </h1>
            <h2>
                Web Developer , Engenieer & Programmer
            </h2>
        </div>
    )
}

export default Home

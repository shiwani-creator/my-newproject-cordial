import React from 'react'
import picture from './pic7.png'

function Navbar() {
    return (
        <div>

            <div className="container1">
                <div className="head">
                    <img src={picture} alt='' />
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="domains">Domain</a>
                        </li>
                        <li>
                            <a href="/hosting">Hosting</a>
                        </li>
                        <li>
                            <a href="/Aboutus">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <button className="btn8">Buy now</button>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="line" />
        </div>

    )
}

export default Navbar

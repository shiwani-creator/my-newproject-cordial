import { faCaretDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Homes() {
    return (
        <div>
            <div className='choose1'>
                <h1>WHMCS-bridge
                </h1>
            </div>
            <div className='chooseswap'>
                <div className='choose2'>
                    <a href=''>english</a>
                </div>
                <div className='choose2'>
                    <a href=''>login</a>
                </div>
                <div className='choose2'>
                    <a href=''>register</a>
                </div>
                <div className='choose2'>
                    <button className='btn20'> <a href=''>View cart</a> </button>
                </div>
            </div>
            <div className='choose3'>
                <div className='choose4'>
                    <ul>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Store <FontAwesomeIcon icon={faCaretDown}/></a>
                            <div className='dropdownmenu'>
                                <ul>
                                    <li><a href=''>All Browser</a></li>
                                    <li><a href=''>Register Window</a></li>
                                    <li><a href=''>Transferin a Domain</a></li>
                                    <li><a href=''>Wordpress Hosting</a></li>
                                </ul>
                            </div>
                        </li>
                        <li> <a href=''>Announcements</a></li>
                        <li>    <a href=''>KnowledgeBase</a></li>
                        <li>  <a href=''>Network Status</a></li>
                        <li>   <a href=''>Contactus</a></li>


                        <li className='list'><a href=''>Account <FontAwesomeIcon icon={faCaretDown}/></a>
                            <div className='dropdownmenu'>
                                <ul>
                                    <li><a href='/login'>Login</a></li>
                                    <li><a href=''>Register</a></li>
                                    <li><a href=''>Forget Password?</a></li>

                                </ul>
                            </div>
                        </li>
                    </ul>


                </div>
            </div>
            <div className='secondpart'>
                <h1>Begin the search for your perfect domain name...
                </h1>
                <div className='third'>
                    <input className='third1' placeholder='eg.example.com'></input>
                    <input className='third2' placeholder='search'></input>
                    <input className='third3' placeholder='transfer'></input>
                </div>
            </div>
            <div className='lastportion'>
                <div className='bcd'>How Can We Help Today?</div>
                <div className='abc'> <a href=''>BUY A DOMAIN</a> </div>
                <div className='abc'> <a href=''>ORDER HOSTING</a> </div>
                <div className='abc'> <a href=''>MAKE PAYMENT</a> </div>
                <div className='abc'> <a href=''>GET SUPPORT</a> </div>


            </div>
            <div className='lastone'>
                <p>powered by <a href=''>WHMCompleteSolution</a></p>


            </div>
            <button className='btn30'>Copyright © 2023 Cordial Cloud Host. All Rights Reserved.</button>


        </div>

    )
}

export default Homes

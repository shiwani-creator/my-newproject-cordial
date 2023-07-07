import React from 'react'
import { useNavigate } from 'react-router'
import { faCaretDown, faCaretLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Choosenow() {
    const navigate = useNavigate();
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
                        <li><a href=''>Store <FontAwesomeIcon icon={faCaretDown} /></a>
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


                        <li className='list'><a href=''>Account <FontAwesomeIcon icon={faCaretDown} /> </a>
                            <div className='dropdownmenu'>
                                <ul>
                                    <li>
                                        <a href='/login5'>Login</a>
                                    </li>
                                    <li>
                                        <a href=''>Register</a>
                                    </li>
                                    <li><a href=''>Forget Password?</a></li>

                                </ul>
                            </div>
                        </li>
                    </ul>


                </div>
            </div>
            <div className='categoris'>
                <div className='category'>
                    <ul>
                        <li>
                            <FontAwesomeIcon className='cart' icon={faShoppingCart} />  Categories <FontAwesomeIcon className='caret' icon={faCaretDown} />
                            <div className='dropdownmenu1'>
                                <ul>
                                    <li>Word Pressing</li>
                                </ul>
                            </div>
                            {/* </div> */}
                        </li>
                    </ul>
                </div>




                <div className='wordpress'>
                    <h1>Wordpress hosting</h1>
                    <div className='tavles'>
                        <div className='tavle'>
                            <div className='tavle1'>
                                <h1>Basics</h1>
                            </div>
                            <div className='tavle2'>
                                <div className='tavle3'>
                                    <p>Progress tracking
                                        Smart notification
                                        Workout challenge
                                        Share with friends
                                    </p>
                                </div>
                                <div className='tavle4'>
                                    <h2>$10.00 USD
                                    </h2>
                                    <p>Montly</p>
                                    <button><i class="bi bi-cart2"></i><a href=''> ordernow</a></button>
                                </div>

                            </div>
                        </div>
                        <div className='tavle6'>
                            <div className='tavle1'>
                                <h1>premium</h1>
                            </div>
                            <div className='tavle2'>
                                <div className='tavle3'>
                                    <p>Progress tracking
                                        Smart notification
                                        Workout challenge
                                        Share with friends
                                    </p>
                                </div>
                                <div className='tavle4'>
                                    <h2>$10.00 USD
                                    </h2>
                                    <p>Montly</p>
                                    <button><i class="bi bi-cart2"></i><a href=''>ordernow</a></button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='tavle7'>
                <div className='tavle10'>
                    <h1>Premium pro</h1>
                </div>
                <div className='tavle2'>
                    <div className='tavle3'>
                        <p>Progress tracking
                            Smart notification
                            Workout challenge
                            Share with friends
                        </p>
                    </div>
                    <div className='tavle4'>
                        <h2>$10.00 USD
                        </h2>
                        <p>Montly</p>
                        <button><i class="bi bi-cart2"></i><a href=''>ordernow</a></button>
                    </div>

                </div>
            </div>
            <div className='lastone2'>
                <p>powered by <a href=''>WHMCompleteSolution</a></p>


            </div>
            <button className='btn31'>Copyright © 2023 Cordial Cloud Host. All Rights Reserved.</button>




        </div>
    )
}

export default Choosenow

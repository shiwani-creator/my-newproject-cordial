import React from 'react'
import picture20 from './pic9.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart, faCaretDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Domains() {
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


                        <li className='list'><a href=''>Account <FontAwesomeIcon icon={faCaretDown} /></a>
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
                            {/* <div className='categories'> */}
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
                <div className='register'>
                    <h1>Register Domain</h1>
                    <p>Find your new domain name. Enter your name or keywords below to check availability.

                    </p>
                </div>
            </div>


            <div className='register1'>
                <div className='register2'>
                    <input className='input31' placeholder='find your new domain name'></input>
                    <button>search</button>
                </div>

            </div>
            <div className='browse'>
                <h3>Browse extensions by category
                </h3>
            </div>
            <button className='btn33'><a href=''>popular (5)</a></button>
            <table className='prices'>

                <tr >

                    <th>Domain</th>
                    <th>New Price</th>
                    <th>transfer</th>
                    <th>Renewal</th>


                </tr>
                <tr>
                    <td>.com</td>
                    <td>$14.95 USD
                        <td>1 Year</td>
                    </td>
                    <td>$14.95 USD
                        <td>1 Year</td>
                    </td>
                    <td>$14.95 USD   <td>1 Year</td></td>


                </tr>
                <tr className='td1'>
                    <td>.net</td>
                    <td>$10.95 USD   <td>1 Year</td></td>
                    <td>$10.95 USD   <td>1 Year</td></td>
                    <td>$10.95 USD  <td>1 Year</td></td>
                </tr>
                <tr>
                    <td>.org</td>
                    <td>$9.95 USD   <td>1 Year</td>
                    </td>
                    <td>$9.95 USD   <td>1 Year</td>
                    </td>
                    <td>$9.95 USD   <td>1 Year</td>
                    </td>

                </tr>
                <tr className='td1'>
                    <td>.biz</td>
                    <td>$9.95 USD   <td>1 Year</td>
                    </td>
                    <td>$9.95 USD   <td>1 Year</td>
                    </td>
                    <td>$9.95 USD   <td>1 Year</td>
                    </td>

                </tr>
                <tr>
                    <td>.info</td>
                    <td>$9.95 USD
                    </td>
                    <td>$9.95 USD
                    </td>
                    <td>$9.95 USD
                    </td>

                </tr>

            </table>
            <div className='texture'>
                <div className='lastsection'>
                    <i class="bi bi-list"></i>
                    <h4>Add Web Hosting</h4>
                    <p>Choose from a range of web hosting packages

                        We have packages designed to fit every budget

                    </p>
                    <button className='btn35'> <a href=''>Explore Package Now</a></button>
                </div>
                <div className='lastsection'>
                    <i class="bi bi-browser-chrome"></i>
                    <h4>Transfer your domain to us
                    </h4>
                    <p>
                        Transfer now to extend your domain by 1 year!*



                    </p>
                    <button className='btn36'> <a href=''>Transfer a domain</a></button>
                    <p>* Excludes certain TLDs and recently renewed domains

                    </p>
                </div>
            </div>
            <div className='lastone2'>
                <p>powered by <a href=''>WHMCompleteSolution</a></p>


            </div>
            <button className='btn31'>Copyright © 2023 Cordial Cloud Host. All Rights Reserved.</button>
        </div>
    )
}

export default Domains

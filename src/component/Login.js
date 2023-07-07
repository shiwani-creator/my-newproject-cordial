import React from 'react'
import { faCaretDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
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
            <div className='loginpage'>
                <h1> <span> login</span> this page is restricted</h1>
            </div>
            <div className='emails'>
                <label>Email Address</label>
            </div>
            <input className='lable1' type='text' placeholder='Enter Email'></input>

            <div className='password'>
                <label>password</label>
            </div>
            <input className='lable1' type='text' placeholder='password'></input>

            <div className='checkbox'>
                <input type='checkbox'></input>
                <div className='remember'> <p>Remember Me</p></div>
            </div>
            <div className='forget'>
                <div className='forget1'> <p>Login</p></div>
                <div className='forget2'><a href=''>Forget password?</a></div>
            </div>
            <div className='lastone2'>
                <p>powered by <a href=''>WHMCompleteSolution</a></p>


            </div>
            <button className='btn31'>Copyright © 2023 Cordial Cloud Host. All Rights Reserved.</button>





        </div>
    )
}

export default Login

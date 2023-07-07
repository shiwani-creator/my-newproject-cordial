import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faCreditCard, faPersonWalkingWithCane, faStopwatch20, faSwatchbook, faTimes, fabell } from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faComment,} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div>
            <div className='contacts'>
                <h1>Contact Us And Enjoy Your Time With Us</h1>
            </div>
            <div className='contact1'>
                <div className='contact2'>
                    <h1>Need Any Help?
                    </h1>
                    <p>Contact us if you have any quries or if you need any help. We are here to support and resolve your problems related to domain and hosting services.

                    </p>
                    <input className='boxes2' type='text' placeholder='Your Name' /> <br></br>
                    <input className='boxes2' type='text' placeholder='Email' /> <br></br>
                    <input className='boxes1' type='text' placeholder='Message' /> <br></br>
                    <button className='btn13'>Send US</button>

                </div>
                <div className='contact3'>
                    <div className='borderbox'>
                        <FontAwesomeIcon className='credit' icon={faStopwatch20} />
                        <h1>Save Your Time</h1>
                        <p>We are here at your support 24hrs to save your time</p>
                    </div>
                    <div className='borderbox'>
                        <FontAwesomeIcon className='credit' icon={faComments} />
                        <h1>Seamless communication</h1>
                        <p>Support and technical team to solve any quries with quick response

                        </p>

                    </div>
                    <div className='borderbox'>
                        <FontAwesomeIcon className='credit' icon={faCreditCard} />
                        <h1>Cashless Paymennt</h1>
                        <p>Easy bill payment with the help of card or epay applications

                        </p>

                    </div>
                </div>

            </div>
            <div className='call'>
                <h1>Call Us! We're The Dust Busters!</h1>
                <button className='btn14'>call 91 123-456-7890</button>
            </div>
            < div className='addresses'>
                <div className='address'>
                    <h1>Address</h1>
                    <p>123, Central Square, New York, NY 1345

                    </p>
                </div>
                <div className='line15'></div>
                <div className='mailus'>
                    <h1>Mail Us</h1>
                    <p>info@example.com, info@example.com</p>
                </div>
            </div>

        </div>
    )
}

export default Contact

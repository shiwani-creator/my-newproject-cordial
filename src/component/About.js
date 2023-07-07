import React from 'react'
import picture from '../pic7.png'
import picture1 from '../pic6.png'
import picture10 from '../pradip.jpg'
import picture11 from '../sarmiila.jpg'
import picture20 from '../pic9.jpg'



function About() {
    return (
        <div>

            <div className='headers'>
                <img src={picture20} alt='' />
                <div className='headers1'>
                    <div className='purple2'></div>
                    <h1>Welcome to Cordialcloud Host</h1>
                    <p>We are dedicated to providing reliable and high-performance web hosting services to businesses and individuals.

                    </p>
                </div>
            </div>

            < div className='About1'>
                <div className='Abouts'>
                    <div className='purple1'></div>
                    <h3>About us</h3>
                    <p>We are a reliable and affordable domain and web hosting company, providing customized hosting solutions for businesses and individuals. Our high-performance hosting plans come with excellent customer support and features like email hosting, SSL certificates, and website builders. Contact us today to learn more.

                    </p>
                    <div className='buynow'>Buy Domain</div>

                </div>
                <div className='house'>
                    <div className='line5' />
                    <img src={picture1} alt='' />

                </div>
                <div className='line6' />

            </div>

            <div className='boxshadow'>
                <div className='box1'>
                    <h1>Our Vision</h1>
                    <p>Our vision is to empower businesses and individuals with reliable, secure, and affordable hosting solutions, while providing exceptional customer support and helping them establish a strong online presence.</p>
                </div>
                <div className='box1'>
                    <h1>Our Mission</h1>
                    <p>Our mission is to provide cutting-edge hosting technology and personalized support to help our clients succeed online. We are committed to delivering exceptional value, reliability, and security to every client.

                    </p>
                </div>
                <div className='box1'>
                    <h1>Core Values</h1>
                    <p>Our core values include customer-centricity, innovation, integrity, teamwork, and excellence. We prioritize our clients' needs, embrace new ideas, act with honesty and transparency, collaborate to achieve success.</p>
                </div>
            </div>
            <div className='purple'></div>
            <div className='client'>
                <h1>What Our Client's Say</h1>
                <p>See what our clients have to say about our hosting services and customer support.

                </p>
            </div>

            <div className='boxshadow2'>

                <div className='box3'>
                    <div className='boxes'>
                        <img src={picture10} alt='' />
                    </div>
                    <div className='box2'>
                        <p>Reliable and affordable hosting solution with fantastic uptime and helpful customer support

                        </p>
                        <h3>Pradip pandey</h3>
                        <h4>small business owner</h4>
                    </div>
                </div>


                <div className='box3'>
                    <div className='boxes'>
                        <img src={picture10} alt='' />
                    </div>
                    <div className='box2'>
                        <p>Reliable and affordable hosting solution with fantastic uptime and helpful customer support

                        </p>
                        <h3>Pradip pandey</h3>
                        <h4>small business owner</h4>
                    </div>
                </div>
                <div className='box3'>
                    <div className='boxes'>
                        <img src={picture10} alt='' />
                    </div>
                    <div className='box2'>
                        <p>Reliable and affordable hosting solution with fantastic uptime and helpful customer support

                        </p>
                        <h3>Pradip pandey</h3>
                        <h4>small business owner</h4>
                    </div>
                </div>






            </div></div >


    )
}

export default About

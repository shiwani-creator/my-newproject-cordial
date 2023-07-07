import React, { useRef } from 'react'
import CountUp, { useCountUp } from 'react-countup';
import picture20 from '../pic9.jpg'

function Hosting() {
    const countRef = useRef();
    const { start } = useCountUp({
        ref: countRef,
        start: 0,
        end: 1234567,
        duration: 5,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });
    return (
        <div>
            <div className='hosting2'>
                <img src={picture20} alt=''/>
                <div className='hosting1'>
                <h1>Simple affordable plan for everyone</h1>
                <p>Select the suitable plans that your business need.

                </p>
                </div>
            </div>
            <div className='packages'>
                        <div className='package1'>
                            <h1>Basics</h1>
                            <h3>$10 <span>/ month</span> </h3>
                            <p>The basic plans and packages for hosting includes:

                            </p>
                            <div className='flexy'>
                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>progress tracking</h6>
                                </div>

                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>
                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>Smart notification</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>
                                <div className='word'><h6>workout challenges</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>share with friends</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icon1'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word1'><h6>adds free</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icon1'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word1'><h6>workout with friends</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icon1'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word1'><h6>personalized diet menu</h6>
                                </div>

                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>
                                <div className='icon1'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word1'><h6>fitness community</h6>
                                </div>
                            </div>
                            <button className='btn4'>order now</button>



                        </div>


                        <div className='package1'>
                            <h1>Premium</h1>
                            <h3>$20 <span>/ month</span> </h3>
                            <p>The basic plans and packages for hosting includes:

                            </p>
                            <div className='flexy'>
                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>progress tracking</h6>
                                </div>

                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>
                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>Smart notification</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>
                                <div className='word'><h6>workout challenges</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>share with friends</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>adds free</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>workout with friends</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icon1'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word1'><h6>personalized diet menu</h6>
                                </div>

                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>
                                <div className='icon1'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word1'><h6>fitness community</h6>
                                </div>
                            </div>
                            <button className='btn4'>order now</button>



                        </div>
                        <div className='package1'>
                            <h1>Premium pro</h1>
                            <h3>$40 <span>/ month</span> </h3>
                            <p>The basic plans and packages for hosting includes:

                            </p>
                            <div className='flexy'>
                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>progress tracking</h6>
                                </div>

                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>
                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>Smart notification</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>
                                <div className='word'><h6>workout challenges</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>share with friends</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>adds free</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>workout with friends</h6>
                                </div>
                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>

                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>personalized diet menu</h6>
                                </div>

                            </div>
                            <div className='line2'></div>
                            <div className='flexy'>
                                <div className='icons'>
                                    <i class="bi bi-check-lg"></i>
                                </div>

                                <div className='word'><h6>fitness community</h6>
                                </div>
                            </div>
                            <button className='btn4'>order now</button>



                        </div>
                    </div>
            <div className='hosting3'>
                <div className='hosting4'>
                    <h3>Best hosting solution</h3>
                    <h1>powering your online presence with reliable hosting solution</h1>
                    <p>We provide reliable and affordable domain and web hosting solutions with exceptional customer support.

                    </p>
                    </div>
                    <button className='btn16'>Buy Now</button>
                    <div  className='liner'></div>
                    <div className='items'>
                        <div className='items2'>
                            <CountUp className='counter'
                                end={100000}
                                duration={2}
                                enableScrollSpy />
                            <p>active users</p>
                        </div>
                        <div className='items2'>
                            <CountUp className='counter'
                                end={50000}

                                duration={2}
                                enableScrollSpy />
                            <p>total users</p>
                        </div>
                        <div className='items2'>
                            <CountUp className='counter'
                                end={30}
                                duration={2}
                                enableScrollSpy />
                            <p>hosting domain</p>
                        </div>
                        <div className='items2'>
                            <CountUp className='counter'
                                end={100}
                                duration={2}
                                enableScrollSpy />
                            <p>satisfaction</p>
                        </div>
                    </div>

                
            </div>
        </div>
    )
}

export default Hosting

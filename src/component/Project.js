import React from 'react'
import '../style.css'
import picture1 from '../pic6.png'
import picture2 from '../pic2.png'
import picture3 from '../pic5.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import ScrollToTop from 'react-scroll-to-top'






function Project() {
    return (
        <div>
         <div className='section'>

                <div className="hosting">
                    <div className="host">
                        <h1>The Best </h1>
                        <h1>Webhosting</h1>
                        <p>
                            Starting at <span> $14.99</span> $9.99/month.
                        </p>
                        <p1>
                            Purchase hosting from our company to ensure your website runs smoothly
                            with fast load times and dependable reliability.
                        </p1> <br></br>
                       <a href='/choose'><button className="btn1" >Buy hosting </button></a>

                    </div>

                    <div className='image'>
                        <img src={picture1} alt='' />
                    </div>
                </div>
                </div>
            
            <div className='domains'>
                <div className='search'>
                    <h1> Search Your Name</h1>

                </div>
                <div className='domain'>
                    <div>
                        <input className='input1' type='text' placeholder='Domain Name'></input>
                    </div>
                    <select className="input2">
                        <option selected>.com</option>
                        <option value="1">.org</option>
                        <option value="2">.info</option>
                        <option value="3">.edu</option>
                        <option value="3">.net</option>
                    </select>

                    <div>
                        <button className='input3'>Find</button>
                    </div>
                </div>
            </div>

            <div className='message'>
                <div className='message1'>
                    Established in 2022, Cordial Cloud Host is a highly reputable and trustworthy web hosting provider and one of the best web hosting company.


                </div>
            </div>
            <div className='para'>
                <div className='paragraph'>
                    <p>  Welcome to Cordial Cloud Host! We are a team of dedicated professionals with years of experience in the hosting industry. Our goal is to provide top-notch hosting solutions to businesses and individuals looking to establish a strong online presence.</p>

                    <p>At our company, we understand that every business has unique hosting needs. That’s why we offer a range of hosting packages that cater to different requirements and budgets. Whether you’re looking for shared hosting, VPS hosting, or dedicated servers, we have a solution that fits your needs.</p>

                    <p> We are committed to providing excellent customer support to our clients. Our support team is available 24/7 to help you with any issues or questions you may have. We also offer a range of tools and resources to help you get the most out of your hosting package, including easy-to-use control panels, one-click installs for popular applications, and more. Thank you for choosing our domain and web hosting company, and we look forward to serving you!</p>


                </div>
                <div className='paragraph1'>
                    <h1>Grown your business</h1>
                    <p>Domain name registration is only the beginning
                    </p>
                </div>
                <div className='flex'>
                    <div className='flex1'>
                        <h1>Register your Domain</h1>
                        <p>CordialCloudHost offers domain registration services for a range of extensions, including .com, .net, and .org. Our easy-to-use domain search tool lets you find and purchase your preferred domain, with 24/7 support available. We also offer hosting plans with generous resources to help get your website up and running.

                        </p>
                        <button className='btn2'>Register Domain</button>
                    </div>
                    <div className='pics'>
                        <img src={picture2} alt='' />
                    </div>
                </div>
                <div className='flexs'>
                    <div className='pics'>
                        <img src={picture3} alt='' />
                    </div>

                    <div className='flex1'>
                        <h1>Find the right hosting for your domain
                        </h1>
                        <p>CordialCloudHost offers reliable and affordable hosting plans with generous resources, including disk space, bandwidth, and email accounts. Our plans come with easy-to-use control panels and one-click installs for popular applications like WordPress. With 24/7 support and a range of plans to choose from, we’re your one-stop shop for all your hosting needs.

                        </p>
                        <button className='btn2'>Choose Plan</button>
                    </div>

                </div>
                <div className='flex'>
                    <div className='flex1'>
                        <h1>Setup your online business
                        </h1>
                        <p>CordialCloudHost offers online business website design and development services to help businesses establish a strong online presence. We offer custom website design, easy-to-use content management systems, and user-friendly interfaces. With our services, you can reach your target audience, boost your online credibility, and grow your business. Contact us today to discuss your online business website needs.

                        </p>
                        <button className='btn2'>Contact Us</button>
                    </div>
                    <div className='pics'>
                        <img src={picture2} alt='' />
                    </div>
                </div>

                <div className='plans'>
                    <div className='package'>
                        <h1>Plan And Packages That We Offers:</h1>
                    </div>
                </div>
                <div className='pack'>
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

                            <button className='btn4' >order now</button>



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
                            <button className='btn4'> <a href='/chooseplan' >order now</a></button>



                        </div>
                    </div>
                </div>




            </div>
            <div className='question'>
                <div className='frequently'>
                    <h1>
                        F.A.Q.

                    </h1>
                    <p>Answers to Commonly Asked Questions</p>
                </div>
                <ul className='accordion'>
                    <li>
                        <label for='first'>
                            what is cloud hosting?<span>&#x3e;</span>

                        </label>
                        <input type='radio' name='accordion' id='first' checked />
                        <div className='content'>
                            <p>Experience the benefits of cloud hosting, which leverages a network of remote servers provided by top third-party providers such as DigitalOcean, Google Cloud, and Microsoft Azure Cloud. With increased flexibility, scalability, reliability, and uptime compared to traditional single-server hosting, users can access the combined resources of the entire network rather than being limited to a single server’s storage and computing capabilities. Choose Cordialcloud Host for powerful and reliable cloud hosting solutions in Nepal.

                            </p>
                        </div>
                    </li>
                    <li>
                        < label for="second">
                            Why choose us?
                            <span>&#x3e;</span>

                        </label>
                        <input type='radio' name='accordion' id='second' />
                        <div className='content'>
                            <p>Trust us to provide hosting solutions that won’t break the bank, allowing you to focus on your business without worrying about unreliable hosting issues. Contact us today and start building your online presence with ease.

                            </p>
                        </div>
                    </li>
                    <li>
                        < label for='third'>
                            Can we buy domain without hosting?
                            <span>&#x3e;</span>

                        </label>
                        <input type='radio' name='accordion' id='third' />
                        <div className='content'>
                            <p>Yes, it is possible to buy a domain without purchasing hosting. In fact, many domain registrars offer the option to purchase domains separately from hosting plans. You can simply search for and register the domain name you want, and then choose where you want to host your website later on. This gives you the flexibility to shop around for the best hosting option that fits your needs and budget. At Cordialcloud Host, we offer domain registration services as well as web hosting services, so you can register your desired domain name with us and choose to host your website with us or with another hosting provider.

                            </p>
                        </div>
                    </li>
                    <li>
                        < label for='fourth'>
                            Is reseller hosting still profitable?
                            <span>&#x3e;</span>

                        </label>
                        <input type='radio' name='accordion' id='fourth' />
                        <div className='content'>
                            <p>Reseller hosting can be profitable if done correctly and with the right strategy. Choosing a reliable and affordable hosting provider such as Cordialcloud Host, offering competitive pricing to clients, providing excellent customer service, and effective marketing of reseller hosting services are important factors. By keeping up-to-date with the latest trends and technologies in web hosting, reseller hosting can remain a profitable business model.

                            </p>
                        </div>
                    </li>


                </ul>
            </div>
            <ScrollToTop />

        </div >






    )
}

export default Project

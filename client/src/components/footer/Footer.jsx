import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <div className="footer-section-1">
        <p>Website feedback? Let us know </p>
    </div>
    <div className="footer-section-2">

        <div className="label-container">
            <div className="label-box">
                <img src="https://www.sephora.com/img/ufe/icons/find-store.svg"  alt='img'/>
                <div>
                    <span>Find a store</span>
                    <p>Choose Your Store</p>
                </div>
            </div>
            <div className="label-box">
                <img src="https://www.sephora.com/img/ufe/icons/find-store.svg" alt='img' />
                <div>
                    <span>Live Beauty Help</span>
                    <p>Chat is unavailable</p>
                </div>
            </div>
            <div className="label-box">
                <img src="https://www.sephora.com/img/ufe/icons/call.svg" alt='img'/>
                <div>
                    <span>
                        1-877-737-4672
                    </span>
                    <p>TTY: 1-888-866-9845 </p>
                </div>
            </div>
            <div className="label-box">
                <img src="https://www.sephora.com/img/ufe/icons/find-store.svg"  alt='img'/>
                <div>
                    <span>Get the App</span>
                    <p>Text "APP" to 36681</p>
                </div>
            </div>
            <div className="label-box">
                <img src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg  " alt='img' />
                <div>
                    <span> Sephora Credit Card Program
                    </span>
                    <p>Want 25% off your Sephora purchase1? DETAILS</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="details">
            <div>
                <h6>About Sephora</h6>
                <p>About Sephora</p>
                <p>News Room</p>
                <p>Career</p>
                <p> Sephora Social Impact</p>
                <p> Supply Chain Transparency</p>
                <p> Affiliates</p>
                <p> Sephora Events</p>
                <p> Gift Cards</p>
                <p> Sephora Global Sites</p>
                <p> Diversity and Inclusion</p>
                <p> Checkout on Instagram</p>
                <p> Sephora Accelerate</p>
                <p> Report a Vulnerability</p>


            </div>

            <div>
                <h6>My Sephora</h6>
                <p> Beauty Insider</p>
                <p> Sephora Credit Card</p>
                <p> Community Profile</p>
                <p> Order Status</p>
                <p> Purchase History</p>
                <p> Account Settings</p>
                <p> Beauty Advisor Recommendations</p>
                <p> Beauty Offers</p>
                <p> Quizzes & Buying Guides</p>
                <p> Rewards Bazaar</p>
                <p> Loves</p>
                <p> Book a Reservation</p>
            </div>

            <div>
                <h6>Help</h6>
                <p>
                    Customer Service</p>
                <p> Returns & Exchanges</p>
                <p> Delivery and Pickup Options</p>
                <p> Shipping</p>
                <p> Billing</p>
                <p> International Shipments</p>
                <p> Beauty Services FAQ</p>
                <p> Sephora at Kohl's</p>
                <p> Sephora Inside JCPenney</p>
                <p> Store Locations</p>
                <p> Online Ordering</p>
                <p> Klarna</p>
                <p> Accessibility</p>


            </div>


            <div className="countries_container">
                <h6>Region & Language</h6>
                <div className="countries_box">
                <img className="countries" src="https://www.sephora.com/img/ufe/flags/us.svg" alt='img'/>
                <p>United States - English</p>
                </div>
                <div className="countries_box">
                <img className="countries" src="https://www.sephora.com/img/ufe/flags/ca.svg" alt='img'/>
                <p>Cannada - English</p>
                </div>
                <div className="countries_box">
                <img className="countries" src="https://www.sephora.com/img/ufe/flags/ca.svg" alt='img'/>
                <p>Cannada - Francais</p>
                </div>

            </div>
            <div className="footer-section-3">
                <h2>We Belong to Something Beautiful</h2>
                <div className="footer-section-box">
                    <div className="footer-section-sub-box">

                        <label for="sign">Sign up for Sephora Emails</label>
                        <input type="text" placeholder="Enter your email address" />
                    </div>
                    <button>Sign up</button>
                </div>

            </div>

        </div>
        <hr />
        <div className="footer-section-4">
            <div>
                <p>© 2022 Sephora USA, Inc. All rights reserved.</p>
                <span>Privacy Policy</span> <span>Terms of Use Accessibility</span>
                <span>Sitemap</span> <span> CA - Do Not Sell My Personal Information</span>
            </div>

            <div id="icons">
                <img src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg" alt='img'/>
                <img src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg" alt='img'/>
                <img src="https://www.sephora.com/img/ufe/icons/twitter-ko.svg" alt='img'/>
                <img src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg" alt='img'/>
                <img src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg" alt='img'/>
                <img src="https://www.sephora.com/img/ufe/icons/snapchat-ko.svg" alt='img'/>

                <img src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg" alt='img'/>

            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;


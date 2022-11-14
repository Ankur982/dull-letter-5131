import React from 'react'
import { Link } from 'react-router-dom'
import "./MyAccounts.css"
const MyAccounts = () => {
  return (
    <>
          <div id="my_account">
        <div id="my_acc_detail">
            <h1>My Account</h1>
            <p id="curr_user_name">Welcome User</p>
        </div>
        <div>
            <button className="my_acc_btn" id="my_acc_logout_btn">LOG OUT</button>
        </div>

    </div>
    <hr className="hr_line" />

    <div id="acc_home">


        <div id="acc_home_section">
            <h1 className="section_txt">Your Referrals</h1>
            <div className="box_your_ref">
                <p className="int_txt">Earn credits per successful referral and your friends will get a discount too.</p>
                <div className="acc_home_section_box">

                    <div className="acc_home_section_inner1" id="acc_home_section_inner_1st">
                        <h1>$0.00</h1>
                        <p>Total Account Credit</p>
                    </div>
                    <hr />
                    <div className="acc_home_section_inner1">
                        <h1>0</h1>
                        <p>Friends Referred</p>
                    </div>

                </div>
                <button className="view_details_btn">VIEW DETAILS</button>
            </div>


        </div>


        <div id="acc_home_section1">
            <h1 className="section_txt"><Link to="/mywishlists">My Wishlist</Link></h1>
            <div className="box_your_ref">
                <p className="int_txt">View your favorite products</p>
                <div className="acc_home_section_box">
                    <button className="view_details_btn" id="view_details_btn2">VIEW DETAILS</button>
                </div>
            </div>
        </div>
    </div>
    <hr className="hr_line" />

    <div className="your_section">
        <h1 className="section_txt">Your Orders</h1>
        <div id="your_order_section">
            <p className="int_txt"> <Link to="/mywishlists">Check Your Ordered Details.</Link></p>
        </div>
    </div>



    <hr className="hr_line" />

    <div className="your_section">
        <h1 className="section_txt">Subscriptions</h1>
        <div id="your_subs_section">
            <p className="int_txt">You currently have no subscriptions.</p>
        </div>
    </div>

    <hr className="hr_line" />

    <div className="your_section">
        <h1 className="section_txt">Customer Service Contact Center</h1>
        <div id="customer_Service_section">
            <p className="int_txt" id="Unavailable">Unavailable</p>
            <img className="cust_section_icon"
                src="https://www.pngitem.com/pimgs/m/534-5344258_comment-chat-message-icon-hd-png-download.png"
                alt="error" />
            <p className="int_txt">Live Chat</p>
        </div>
    </div>


    <div className="your_section_social">
        <div className="your_section_box">
            <img  src="https://i.pinimg.com/564x/22/23/3e/22233eb039fec68231105620652517e8.jpg" alt="error" className="cust_section_icon" />
            <p className="int_txt">Message</p>
        </div>
        <div className="your_section_box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wp8pVhP2jVsIxGj8mBdiZMo5o8_P4HN83Q&usqp=CAU" alt="error" className="cust_section_icon" />
            <p className="int_txt">View your messages</p>
        </div>
        <div className="your_section_box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2eW2_WfINZK4c9_5hwizfu_BW3Krtd9aC2g&usqp=CAU" alt="error" className="cust_section_icon" />
            <p className="int_txt">Facebook</p>
        </div>
        <div className="your_section_box">
            <img src="https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png" alt="error" className="cust_section_icon" />
            <p className="int_txt">Twitter</p>
        </div>
    </div>

    <div id="contact_us_section">
        <div>
            <img src="https://icon-library.com/images/phone-icon-png-black/phone-icon-png-black-25.jpg" alt="" className="cust_section_icon" />
        </div>
        <div>
            <p>Call our Customer Service team on 801-252-4623</p>
            <p>Monday - Friday: 8am-10pm (EST)</p>
            <p>Saturday: 10am-7pm (EST)</p>
            <p>Closed on Sundays & Public Holidays</p>
        </div>

    </div>

    <hr className="hr_line" />

<h1 className="section_txt">Customer Service Contact Center</h1>
<div className="your_section_social">
    <div className="your_section_box">
        <img  src="https://png.pngtree.com/png-vector/20190725/ourmid/pngtree-vector-wallet-icon-png-image_1576702.jpg" alt="error" className="cust_section_icon" />
        <p className="int_txt">Account Credit</p>
    </div>
    <div className="your_section_box">
        <img src="https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-setting-icon-png-image_1024610.jpg" alt="error" className="cust_section_icon" />
        <p className="int_txt">Communication Preferences</p>
    </div>
    <div className="your_section_box">
        <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt="error" className="cust_section_icon" />
        <p className="int_txt">Account Details</p>
    </div>
    <div className="your_section_box">
        <img src="https://www.svgrepo.com/show/220992/agenda-address-book.svg" alt="error" className="cust_section_icon" />
        <p className="int_txt" >Addresses</p>
    </div>

    <div className="your_section_box">
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/512/external-credit-card-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev-2.png" alt="error" className="cust_section_icon" />
        <p className="int_txt">Payment Cards</p>
    </div>

    <div className="your_section_box">
        <img src="https://icons-for-free.com/download-icon-network+share+social+icon-1320086500073493658_512.png" alt="error" className="cust_section_icon" />
        <p className="int_txt">Social Links</p>
    </div>
</div>


    </>
  )
}

export default MyAccounts
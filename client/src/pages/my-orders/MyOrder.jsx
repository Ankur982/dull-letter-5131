import React from 'react'
import "./MyOrder.css"
const MyOrder = () => {
return (
<>
    <div id="my_account_order_cont">
        <p className="my_account_order_txt"><a href="/">My Account</a> / Order Information</p>
    </div>
    <hr className="hr_line" />

    <div id="my_account">
        <div id="my_acc_detail">
            <h1>Order Information</h1>
        </div>
        <div>
            <button className="my_acc_btn1" id="account_home_btn">ACCOUNT HOME</button>
            <button className="my_acc_btn2" id="logout_btn">LOG OUT</button>
        </div>
    </div>

    <hr className="hr_line" />

    <div className="your_section">
        <h1 className="section_txt">Active Orders</h1>
        <div id="your_order_section">
            <p className="int_txt">You currently have no outstanding orders.</p>
        </div>
    </div>

    <hr className="hr_line" />

    <div className="your_section">
        <h1 className="section_txt">Completed Orders</h1>
        <div id="your_subs_section">
            <p className="int_txt">You currently have no completed orders.</p>
        </div>
    </div>

    <hr className="hr_line" />
    
</>
)
}

export default MyOrder
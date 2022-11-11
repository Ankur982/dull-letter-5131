import React from 'react'
import "./MyWishlist.css"
const MyWishlist = () => {
  return (
    <>
        <div id="my_wishlist">
        <h1>My Wishlist</h1>
        <hr />
        <div id="wishlish_container">
            <img class="wishlist_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_D5oEjScHGofIp1r475g2cJ9sS0LtMkyfewdpQ0qcZdWtZKc"
                alt="error" />
            <h3>Your Wishlist is empty</h3>
            <p>Add some items to your wishlist to save them for later.</p>
        </div>

        <button class="my_wishlist_btn">CONTINUE SHOPPING</button>

    </div>

<hr class="hr_line"/>
    <div id="my_wishlist_imges">

        <div class="my_wishlist_img">
            <img src="https://s1.thcdn.com/widgets/121-us/53/Skincare-041053.jpg" alt="error"/>
            <h3>Skin Care</h3>
        </div>
        <div class="my_wishlist_img">
            <img src="https://s1.thcdn.com/widgets/121-us/30/580x580-125830.jpg" alt="error"/>
            <h3>Hair Care</h3>
        </div>
        <div class="my_wishlist_img">
            <img src="https://s1.thcdn.com/widgets/121-us/17/original-NF_PROD_SpringPromo22-Mini_Hero_01-102717.jpg" alt="error"/>
            <h3>Tools</h3>
        </div>
        <div class="my_wishlist_img">
            <img src="https://s1.thcdn.com/widgets/121-us/16/Makeup-041316.jpg" alt="error"/>
            <h3>Makeup</h3>
        </div>
        <div class="my_wishlist_img">
            <img src="https://s1.thcdn.com/widgets/121-us/32/Body-041332.jpg" alt="error"/>
            <h3>Bath & Body</h3>
        </div>
        <div class="my_wishlist_img">
            <img src="https://s1.thcdn.com/widgets/121-us/49/Wellness-041349.png" alt="error"/>
            <h3>Wellness</h3>
        </div>


    </div>

    </>
  )
}

export default MyWishlist
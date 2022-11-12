import React, { useEffect } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react' 
import { useState } from "react";
import "./MyOrder.css";
const MyOrder = () => {

    const [orderList, setOrderList] = useState();
    const [isData, setIsData] = useState(false);


    const [item, setitem] = useState()

    const [product , setProduct] = useState([])

    console.log(orderList)

    useEffect(() => {
        getUserId();
    }, []);


    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZkYzNhMjgwNDcxNjRhOTI3YWVlYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjgyODMxMDAsImV4cCI6MTY2ODU0MjMwMH0.ly2JOwCkBcA3GdHviu7E8lFCm8fgyWE_QfLE6HLDUmA";

  const getUserId = () => {
    fetch("http://localhost:8080/users/getuser", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "token":token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        getOrderData(data._id)
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const getOrderData= (id) => {
    fetch(`http://localhost:8080/orders/find/${id}`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "token":token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data)
        setIsData(true)
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const getItem= (id) => {
    console.log(id)
    fetch(`http://localhost:8080/products/find/${id}`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };


 

  const handleOrderDetails = (orderedItem) =>{
     orderedItem.map((e)=>{
        getItem(e.productId)
    })
    
  }



  return (
    <div style={{ marginBottom: "50px" }}>
      <div id="my_account_order_cont">
        <p className="my_account_order_txt">
          <a href="/">My Account</a> / Order Information
        </p>
      </div>
      <hr className="hr_line" />

      <div id="my_account">
        <div id="my_acc_detail">
          <h1>Order Information</h1>
        </div>
        <div>
          <button className="my_acc_btn1" id="account_home_btn">
            ACCOUNT HOME
          </button>
          <button className="my_acc_btn2" id="logout_btn">
            LOG OUT
          </button>
        </div>
      </div>

      <hr className="hr_line" />

      <div className="your_section">
        <h1 className="section_txt">Active Orders</h1>
        <div id="your_order_section">
            {
                isData?
            
            <>
            {orderList.map((e) => (
              <div key={e._id} >
                <div style={{display:"flex", gap:"50px", margin:"auto" , marginTop:"20px", textAlign:"center"}}>
                    <h1> Order Id: {e._id}</h1>
                    <p>Order Status: {e.status}</p>
                    <p>Order Amount: {e.amount}</p>
                    <p>Order created at: {e.createdAt}</p>
                    <Button colorScheme='teal' size='md' onClick={()=>handleOrderDetails(e.products)}>Check Details</Button>   
                </div>
              </div> 
            ))}
          </>
            :<p className="int_txt">You currently have no outstanding orders.</p>
            }
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
    </div>
  );
};

export default MyOrder;

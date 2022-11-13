import { Box, SimpleGrid,Text } from '@chakra-ui/react';
import "./Cart.css"
import Item from './Item';
import ItemList from './ItemList';
import PaymentCard from './PaymentCard';
import Giftcard from './Giftcard';
import data from "./data";
import CartItem from './CartItem';
import Additional from "./Additional";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cart = () => {
  const [total ,setTotal] = useState("");
  const { cartItems } = data;
  const navigate = useNavigate();

  const totalSum = () =>{
    let t = cartItems.reduce(function (sum, elem, index, arr) {
      return sum + Number(elem.price);
    }, 0);
    return t;
  }

  useEffect(()=>{
    setTotal(totalSum(cartItems));
  },[]);

  // console.log(total);

  const removeFromCart =(id)=>{
      let isExist = cartItems.find((item) => item.id === id);
  }
 
  
  const checkout =()=>{
      navigate("/checkout");
  }

  return (
          <SimpleGrid className='main-grid' columns={[1,null,1,2]} spacing={4}>
            <Box className='item-box'>
              <Item />
              <ItemList />
              {cartItems &&
              cartItems.map((el, index) => (
                <CartItem
                  key={el.id}
                  id={el.id}
                  product_id={el.product_id}
                  image={el.image}
                  name={el.name}
                  brand={el.brand}
                  price={el.price}
                />
              ))}
              <Additional />
              <Text color={'red'} fontSize="0.9rem" mt='0.5rem'>Shipping is taking longer due to high demand. 
                Please check your expected delivery date at checkout.
                 Need it sooner? Buy online and pick up in store or get same-day delivery ▸</Text>
            </Box>
            <Box className='payment-box'>
                <PaymentCard checkout={checkout} total={total}/>
                <Giftcard />
            </Box>
          </SimpleGrid>
  )
}

export default Cart;

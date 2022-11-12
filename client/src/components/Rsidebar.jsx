import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import React, { useEffect, useState } from 'react'
import {
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { Flex } from '@chakra-ui/react';

const Rsidebar = () => {
  const { toggleSidebar, collapsed,collapseSidebar } = useProSidebar();
  const [menuCollapse, setMenuCollapse] = useState(true);
  useEffect(()=>{
    setMenuCollapse(true)
  },[])
  const menuIconClick = () => {
    if(menuCollapse) {
      setMenuCollapse(false);
      collapseSidebar()
    } else {
      setMenuCollapse(true);
    } 
    toggleSidebar()
  };
  return (
<Flex h="100%">
      <Sidebar>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        {/* <button onClick={() => menuIconClick()}>  */}
        <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
            {/* </button> */}
      </main>
    </Flex>

  )
}

export default Rsidebar
import React from 'react'
import {Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import {logo} from "../constants/const"
import {Link} from "react-router-dom"
function Header() {
  return (
    <Menu borderless fixed='top' style={{height:88}} >
           <Menu.Item  >
           <img src={logo} alt='logo' style= {{width:130,height:85}} />
           </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/" />
           <Menu.Item name="Recipes" as={Link} to="/recipes"/> 

    </Menu>
  )
}

export default Header
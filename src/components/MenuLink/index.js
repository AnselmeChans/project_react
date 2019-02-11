
import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import style from "./menuLink.module.css";


const MenuLink = props => (
  <Menu className={style.menu_contains} fixed="top" {...props}>
 

    <Menu.Item as={Link} to="/">
      HOME
    </Menu.Item>

    <Menu.Item as={Link} to="/about">
      About
    </Menu.Item>

    <Menu.Item as={Link} to="/shows_data">
      Shows
    </Menu.Item>

    <Menu.Item as={Link} to="/search_data">
      Search
    </Menu.Item>
  </Menu>
);
export default MenuLink;
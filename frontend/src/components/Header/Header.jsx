import React from 'react';
import{ Container,Row,Button} from'reactstrap'
import{ NavLink, Link} from 'react-router-dom'

import logo from "../../assets/images/logo.png";
import "./header.css"

const nav_links =[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]
const Header = () => {
  return <header className="header">
   <Container>
    <Row>
      <div className="nav_wrapper d-flex align-items-center
      justify-content-between">

        <div className="logo">
          <img src="{logo}" alt="" />
        </div>


        <div className="navigation">
          <ul className="menu d-flex align-items-center gap-5">
            {
              Nav_Links.map((item,index)=>( 
                <li className="nav items" key={index}>
                  <NavLink to={item.path}className={navClass=> navClass.
                    isActive ? 'active_link':'.'}>{item.display}</NavLink>
                </li>
              ))}
          </ul>
        </div>
       <div className="nav_right d-flex align-items-center gap-4">
        <div className="nav_btns d-flex align-items-center gap-4 ">
                 <Button className='btn secondary_btn'><Link to='/
                 login'>Login</Link></Button>
                 <Button className='btn primary_btn'><Link to='/
                 Register'>Register</Link></Button>
        </div>

        <span className="mobile_menu">
          <i class="ri-menu-line"></i>
        </span>
       </div>
      </div>
    </Row>
   </Container>

  </header>
};

export default Header;
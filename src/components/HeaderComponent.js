import React,{useState} from 'react'
import { Navbar, NavbarBrand, Jumbotron, NavItem, Collapse, Nav, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

function HeaderComponent() {

    const [isNavOpen,setToggleNav] = useState(false);


    const toggleNav = () => {
      setToggleNav(!isNavOpen);
      console.log(!isNavOpen);
    }

  return (
    <div>
      <Navbar dark expand='md'>
        <div className='container'>
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand href='/'>
            Food Fusion
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className='nav-link' to='/home'>
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className='container'>
          <div className='row header__row'>
            <div className="col-12 col-sm-6">
              <h1>Food Fusion</h1>
              <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}

export default HeaderComponent

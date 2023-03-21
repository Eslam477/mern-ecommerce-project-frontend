import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillCartFill } from 'react-icons/bs'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
const _nav = () => {

    const locationsWithOutNav = ['/login', '/reg']
    const pathName = useLocation().pathname
    if (!locationsWithOutNav.includes(pathName)) {
        return (
            <nav>
                <Navbar className='upper_navbar'>
                    <Nav>
                        <Container>
                            <span><AiFillPhone /> +20 0000 0000 </span>
                            <span><AiFillMail /> user@gmail.com </span>
                            <span><ImLocation2 /> 1958 Stonecoal Road </span>
                        </Container>
                    </Nav>
                </Navbar>
                <Navbar collapseOnSelect expand="lg" variant="dark" className='main_navbar'>
                    <Container>
                        <Navbar.Text className='logo'><Link to='/' className='linkDecorationNon'><b>Index<span>.</span></b></Link></Navbar.Text>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto nav_search">
                                <form action="" className='nav_form'>
                                    <select name="" id="">
                                        <option value="all">All Categories</option>
                                        <option value="pc">PC</option>
                                        <option value="phone">Phone</option>
                                    </select>
                                    <input type="text" placeholder='Search here' />
                                    <button>Search</button>
                                </form>
                            </Nav>
                            <Nav className='status'>
                                <Nav.Item><Link to='/cart' className='linkDecorationNon'><BsFillCartFill /><br />Your Cart</Link></Nav.Item>
                                <Nav.Item><Link to='/admin' className='linkDecorationNon'>Admin</Link></Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Navbar className='nav_links'>
                    <ul className='d-flex flex-row p-3'>
                        <li><a href='#' className='link_hover_effect'> Home</a></li>
                        <li><a href='#' className='link_hover_effect'>Hot Deals</a></li>
                        <li><a href='#' className='link_hover_effect'>Categories</a></li>
                        <li><a href='#' className='link_hover_effect'>Laptops</a></li>
                        <li><a href='#' className='link_hover_effect'>Smartphones</a></li >
                        <li><a href='#' className='link_hover_effect'>Cameras</a></li >
                        <li><a href='#' className='link_hover_effect'>Accessories</a></li >
                    </ul >
                </Navbar >
            </nav >
        );
    } else {
        return null
    }
}

export default _nav;

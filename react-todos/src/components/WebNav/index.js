import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './style.css'

export default function WebNav() {

    return (
        <Navbar color='dark' dark expand='xs'>
            <NavbarBrand href='/home'>To-Dos</NavbarBrand>
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/complete">Complete</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

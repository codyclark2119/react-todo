import React from 'react'
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

export default function Footer() {

    return (
        <Navbar color='dark' dark expand='xs' fixed='bottom'>
            <NavbarBrand href='https://codyevanclark.com' className='mx-auto'>&copy;Cody Clark</NavbarBrand>
        </Navbar>
    )
}

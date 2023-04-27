import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';

function Nav()
{
    return (
        <div>
            <nav>
            <Link to='index' className='logo'>
                <img  id='logo1'src={logo} alt='logo'/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'>

                </span>
            </label>
            <ul className='menu'>
                <li><Link to='main' className='active'>Home</Link></li>
                <li><Link to='Service' className='active'>Service</Link></li>
                <li><Link to='Pricing' className='active'>Pricing</Link></li>
                <li><Link to='About Us ' className='active'>About Us</Link></li>
                <li><Link to='Start a Company ' className='active btn btn-success ' id='aa'>Start a Company</Link></li>
            </ul>
            
            </nav>
        </div>
    )
}


export default Nav;
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {

    const[open, setOpen] = useState (false)

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/product/:id', name: 'ProductDetail', id: 'product-detail' },
        { path: '*', name: 'NotFound', id: 'not-found' }
      ];
      
    return (
        <nav className="text-black p-6 bg-yellow-200"
        >
           <div className="md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ? <AiOutlineClose className="text-2xl"></AiOutlineClose> : <AiOutlineAlignLeft className="text-2xl"></AiOutlineAlignLeft>
            }
              
           </div>
            
            <ul className={`md:flex absolute duration-1000 md:static
            ${open ? 'top-16' : '-top-60'}
            bg-green-300 p-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;
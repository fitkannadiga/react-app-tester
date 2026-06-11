import { Link } from "react-router";

const HeaderComponent = () => {
    return (
        <header id="header">
            <Link to="/" className="brand-section" title="Swiggy Clone">
                <div className="brand-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logo lucide lucide-hamburger-icon lucide-hamburger"><path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"/><path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"/><path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"/><path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/></svg>
                    {/* <img className="logo" src="https://img.magnific.com/premium-vector/fast-free-food-delivery_1208773-925.jpg" alt="logo"/> */}
                    <div>
                        <h1>Swiggy Clone</h1>
                        <p>Food delivery at your doorstep</p>
                    </div>
                </div>
            </Link>
            <div className="nav-items">
                <ul>
                    <li><Link to="/" title="Home">Home</Link></li>
                    <li><Link to="/about" title="About Us">About Us</Link></li>
                    <li><Link to="/contact" title="Contact Us">Contact Us</Link></li>
                    <li title="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderComponent;
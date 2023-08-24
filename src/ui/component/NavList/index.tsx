import {Link} from "react-router-dom";


export default function NavList() {
    const NavListStyle = {
        display: "flex",
        textDecoration: "none"
    }

    return (
        <div className="d flex" style = {NavListStyle}>
            <ul>
                <li>
                    <Link to="/">Product Listing Page</Link>
                </li>
                <li>
                    <Link to="/product/1/99">Product Detail Page</Link>
                </li>
                <li>
                    <Link to="/shoppingcart">Shopping Cart Page</Link>
                </li>
                <li>
                    <Link to="/checkout/1">Checkout Page</Link>
                </li>
                <li>
                    <Link to="/thankyou">Thank You Page</Link>
                </li>
            </ul>
        </div>
    );
}

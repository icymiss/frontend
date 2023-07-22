import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {light} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Button} from "react-bootstrap";
import NavList from "./NavList";
import {Link} from "react-router-dom";


export default function TopNavBar(){
    return <>


        <Navbar sticky={"top"} bg="dark" variant="dark">
            <Container>
                <Link to = "/" style={{textDecoration: 'none'}}>
                    <Navbar.Brand>FLORAL SHOP</Navbar.Brand>
                <Navbar.Toggle/>
                    </Link>


                <Nav className="me-auto">
                    <Nav.Link href="/#/">Home</Nav.Link>
                    {/*<Nav.Link href="/#/Product/10">Product<DropdownMenu/></Nav.Link>*/}
                    <Nav.Link href="/#/product/8/">Product</Nav.Link>
                    {/*<NavList/>*/}


                </Nav>
            </Container>
        </Navbar>
    </>

}
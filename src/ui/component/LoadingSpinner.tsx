import {Spinner} from 'react-bootstrap';
import Container from "react-bootstrap/Container";

export default function LoadingSpinner() {

    return (
            <Container className="d-flex justify-content-center align-items-center d-inline-flex justify-content-around">
                <div style={{height: "90vh" }}/>
                <Spinner animation="border" variant="warning" role="status"/>
                <Spinner animation="border" variant="light" size="sm" />
                <Spinner animation="border" variant="warning" role="status"/>
                <Spinner animation="border" variant="light"size="sm"/>
                <Spinner animation="border" variant="warning" role="status" />
            </Container>
    )
}



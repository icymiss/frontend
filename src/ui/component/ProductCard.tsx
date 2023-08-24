import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {ProductListDto} from "../../data/dto/ProductListDto";
import {Link} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core';

type Props = {
    productListDto: ProductListDto
}

export default function ProductCard(props: Props){
    return(
        <div>
        <Card style={{ borderColor: 'yellowgreen',borderWidth:'1px',  width: '280px', margin: '20px 0',background: 'antiquewhite', color: 'grey'}}>
            <Card.Img variant="top" src={props.productListDto.imageUrl}  />
            <Card.Body>
                <Card.Title style={{height: '100px'}}><h2>{props.productListDto.name}</h2></Card.Title>
                <Card.Text>
                    <h4>${props.productListDto.price}<br/></h4>
                    {
                        props.productListDto.hasStock ? "have stock" : "out of stock"
                    }
                </Card.Text>
                <Link to={`/product/${props.productListDto.pid}`}>
                <Button style={{paddingBottom: '10px' }}variant="--bs-success" >
                    <FontAwesomeIcon icon={solid("bag-shopping")} beat size="xl" style={{color: "#bccdc7",}} />
                   </Button> </Link>
            </Card.Body>
        </Card>
        </div>
    )
}

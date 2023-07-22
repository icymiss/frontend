import Selector from "./Selector";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {ProductDetailDto} from "../../data/dto/ProductDetailDto";

type Props = {
    productDetailDto: ProductDetailDto,
    quantity: number,
    setQuantity: (newQuantity: number) => void
}

export default function ProductDetailContainer(props: Props){
    const renderSelectorAndCartButton = () => {
        if(props.productDetailDto.stock >0) {
        return(

            <div className="d-flex flex-wrap align-items-center justify-content-between" style ={{width: "500px", color: 'white'}}>
                <Selector quantity={props.quantity} setQuantity={props.setQuantity} stock={props.productDetailDto.stock}/>
                <Button variant="--bs-warning-bg-subtle">Add to Cart</Button>
            </div>
        )} else {
            return (
                <div className="d-flex justify-content-between" style ={{width: "400px", color: 'grey'}}>
                    <Button disabled variant="--bs-warning-bg-subtle">Out of Stock</Button>
                </div>
            )
        }
    }

    return(
            <Container style ={{background: "antiquewhite"}}>
                <img width="500px" src={props.productDetailDto.imageUrl}/>
                <h1>{props.productDetailDto.name} </h1>
                <h2> Price</h2>
                <h3>HK${props.productDetailDto.price}</h3>
                <h2>Description</h2>
                <h5>{props.productDetailDto.description}</h5>
                {renderSelectorAndCartButton()}

            </Container>
    )
}
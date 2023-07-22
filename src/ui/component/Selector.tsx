import Button from "react-bootstrap/Button";


type Props = {
    quantity: number,
    setQuantity: (newQuantity:number) => void,
    stock: number

}
export default function Selector(props: Props){
    const buttonStyle = {
        background: "antiquewhite",
        width: "50px",
        height: "50px",
        fontSize: "20px",
        color: "black",
        hover: "grey",

    }
    const quantityStyle = {
        borderWidth: "2px",
        width: "100px",
        height: "50px",

        borderRadius: "5px",
        hover: "red",
        color: "black",
        fontSize: "20px"
    }

    const handleMinusQuantity = () =>{
        if (props.quantity>1){
            props.setQuantity(props.quantity - 1);
        }
    }




    const handlePlusQuantity = () => {
        if (props.quantity<props.stock)
        props.setQuantity(props.quantity +1);

    }

    return(

       <div className="d-flex flex-row, text-center">
           <Button style={buttonStyle} variant="light" onClick={handleMinusQuantity}>-</Button>
           <div style={quantityStyle}>{props.quantity}</div>
           <Button style={buttonStyle} variant="light" onClick={handlePlusQuantity}>+</Button>
       </div>
)

}


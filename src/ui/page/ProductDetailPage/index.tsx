import {useNavigate, useParams} from "react-router-dom";
import TopNavBar from "../../component/TopNavbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Selector from "../../component/Selector";
import {useState} from "react";
import mockData from "./response.json";
import {useEffect} from "react";
import {ProductDetailDto} from "../../../data/dto/ProductDetailDto";
import ProductDetailContainer from "../../component/ProductDetailContainer";
import LoadingSpinner from "../../component/LoadingSpinner";
import ProductApi from "../../../api/ProductApi";
import getProductById = ProductApi.getProductById;


type Params = {
    productId: string;
}

export default function ProductDetailPage(){
    const [quantity, setQuantity] = useState<number>(1);
    const [productDetailDto, setProductDetailDto] = useState<ProductDetailDto | undefined>(undefined);

    const params = useParams<Params>();
    const navigate = useNavigate();

    const getProductByPid = async (pid: string) =>{
        try{
            if (params.productId){
               const data = await ProductApi.getProductById(params.productId);
              setProductDetailDto(data);
            }
        } catch (error){
            navigate("/error");
    }
}

    useEffect(() => {
        getProductByPid(params.productId!);
    }, [params.productId])

    return (
        <div style={{background: "cover", backgroundColor: "black", width: "1000px" ,height: "1000px"}}>
            <TopNavBar/>
                <div style={{color: "grey", width: "600px"}}>
                    { productDetailDto ?
                        <ProductDetailContainer productDetailDto={productDetailDto}
                                                quantity={quantity}
                                                setQuantity={setQuantity}/>
                         : <LoadingSpinner/>
                    }
                 </div>
        </div>
    )
}

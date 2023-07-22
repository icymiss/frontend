import NavList from "../../component/NavList";
import {useLocation} from "react-router-dom";
import TopNavBar from "../../component/TopNavbar";
import ProductCard from "../../component/ProductCard";
import "./Style.css";
import Container from "react-bootstrap/Container";
import mockData from "./response.json";
import {useEffect, useState} from "react";
import {ProductListDto} from "../../../data/dto/ProductListDto";
import LoadingSpinner from "../../component/LoadingSpinner";
import ProductApi from "../../../api/ProductApi";


export default function ProductListingPage() {

    const [productListDtos, setProductListDtos] = useState<ProductListDto[] | undefined>(undefined);

    useEffect(() => {
        ProductApi.getAllProducts(setProductListDtos);
    },  []);

    const renderProductCards = () => {
        if(productListDtos) {
        return productListDtos.map((value) => (
                <ProductCard productListDto={value} key={value.pid}/>
        ))
        } else {
            return <LoadingSpinner/>
        }
    };

    return <div style={{backgroundSize: "cover", backgroundColor: "black"}}>
            <TopNavBar/>
            <Container id={"product-card-container"}>
                {renderProductCards()}
                </Container>;
    </div>
        }
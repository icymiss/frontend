import {ProductListDto} from "../data/dto/ProductListDto";
import axios from "axios";
import {ProductDetailDto} from "../data/dto/ProductDetailDto";
import getEnvConfig from "../config/Config";

namespace ProductApi {
    //const baseUrl = getEnvConfig().baseUrl;

    const baseUrl = "http://localhost:8080/";
    export const getAllProducts = async (setProductListDtos: (data: ProductListDto[]) => void ) => {
        const response = await axios.get(`${baseUrl}/public/product`);
        setProductListDtos(response.data);
    }

    export const getProductById = async (pid: string): Promise<ProductDetailDto> => {
        try{
            const response = await axios.get(`${baseUrl}/public/product/${pid}`);
            return response.data;
    } catch (error){
            console.log(error);
            throw error;
        }
    }
}
export default ProductApi;






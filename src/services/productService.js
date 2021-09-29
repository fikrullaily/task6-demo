import apiClient from "../helper/apiClient";

class ProductsService {
    getAllProducts = () => apiClient().get('products') //di tutorial users (ada s nya)
}

export default new ProductsService();
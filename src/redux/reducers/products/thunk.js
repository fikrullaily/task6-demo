import ProductsService from "../../../services/productService";
import actions from "./actions";

export const loadProductsAsync = () => (dispatch) => {
    dispatch(actions.productsLoadStart())

    ProductsService.getAllProducts()
        .then((response => dispatch(actions.productsLoadSuccess(response.data))))
        .catch((error) => dispatch(actions.productsLoadError(error.messager)));
};

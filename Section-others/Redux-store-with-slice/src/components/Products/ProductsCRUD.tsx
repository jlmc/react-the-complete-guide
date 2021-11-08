import React, {useEffect, useState} from "react";
import Table, {TableHeader} from "../shared/Table";
import ProductForm from "./ProductForm";
import {Product} from "../../model/Product";
import {ProductCreator} from "../../model/ProductCreator";
import {errorAlert, infoAlert, questionCallbackAlert, successAlert} from "../shared/dialogs/Alerts";
import * as ProductActions from "../../redux/Prod/Product.actions";

import {useAppDispatch, /*useAppDispatch, */ useAppSelector} from '../../hooks';
import {productSliceActions, PENDING, ProductsState, SUCCEEDED} from "../../redux/Prod/Product.slice";
import Button from "../shared/Button";
//import {getAllProducts} from "../../service/Products.service";

const headers: TableHeader[] = [
    {key: '_id', value: '#'},
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price', right: true},
    {key: 'stock', value: 'Available Stock', right: true}
]

const newEmptyProduct = (): Product => ({
    _id: undefined,
    name: '',
    price: 1.0,
    stock: 0,
    createAt: undefined,
    updatedAt: undefined
});

declare interface ProductsCRUDProps {
    products: Product[]
}

// React.FC<ProductFormProps> = (props
const ProductsCRUD: React.FC = (props) => {
    //const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(newEmptyProduct())

    // import {useDispatch} from "react-redux";
    //const dispatch = useDispatch();

    const appDispatch = useAppDispatch();
    //const products: Product[] | null = useAppSelector((state) => state.products.entities);
    const productsState: ProductsState = useAppSelector((state) => state.products);


    useEffect(() => {
        appDispatch(ProductActions.fetchAllProducts(1234))
    }, [appDispatch])


/*    useEffect(() => {
        getAllProducts().then( (products) => {
            appDispatch(productSliceActions.receivedProducts(products))
        })
    }, []);*/


    /**
     * on table delete handle
     */
    const handleDeleteClick = (product: Product) => {

        questionCallbackAlert({
            questionTitle: 'Are you sure?',
            questionText: "You won't be able to revert this!",
            confirmButtonText: `Yes, delete ${product.name}!`,

            chain: () => deleteProduct(product._id),

            successTitle: "Deleted!",
            successText: "Your file has been deleted."
        })
    }

    const deleteProduct = async (productId?: string) => {
        if (productId) {
            try {

                appDispatch(ProductActions.deleteExistingProduct(productId))

                resetFormProducts()

                successAlert('Product successfully deleted')

            } catch (err) {
                let message = `Some problem happen: ${err}`
                errorAlert(message)
            }
        }
    }

    const handleProductDetail = (product: Product) => {

        infoAlert(
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'Product details',
        )
    }

    /**
     * on table edit handle
     */
    const handleEditSelect = (product: Product) => {
        setSelectedProduct(product)
    }

    const resetFormProducts = () => {
        setSelectedProduct(newEmptyProduct())
    }

    const handleFormProductUpdate = async (otherProduct: Product) => {
        try {

            appDispatch(ProductActions.updateExistingProduct(otherProduct))
            resetFormProducts()

        } catch (err) {
            let message = `Some problem happen: ${err}`
            errorAlert(message)
        }
    }

    const handleFormProductAdd = async (otherProduct: ProductCreator) => {
        try {

            const newProductCreator: ProductCreator = {
                name: otherProduct.name,
                price: otherProduct.price,
                stock: otherProduct.stock
            };

            appDispatch(ProductActions.insertNewProduct(newProductCreator))

            resetFormProducts()

        } catch (err) {
            let message = `Some problem happen: ${err}`
            errorAlert(message)
        }
    }

    //  <button onClick={() => dispatch(addToCart(product.id))}>

    const incrementStockHandler = () => {
        appDispatch(productSliceActions.incrementStock(5))
    }

    return (
        <React.Fragment>
            {
                productsState.loading === SUCCEEDED &&
                <Table
                    headers={headers}
                    data={productsState.entities}
                    enableActions={true}
                    onDelete={handleDeleteClick}
                    onDetail={handleProductDetail}
                    onEdit={handleEditSelect}
                />
            }
            {
                productsState.loading === PENDING && <div>loading...</div>
            }
            <ProductForm
                product={selectedProduct}
                onCancel={resetFormProducts}
                onUpdate={handleFormProductUpdate}
                onSubmit={handleFormProductAdd}/>

            <Button onClick={incrementStockHandler}>increment stock</Button>
        </React.Fragment>
    );
}

export default ProductsCRUD;

// import {connect, useDispatch} from "react-redux";

/*
const mapStateToProps = (state: any) => {
    return {
        products: state.products.entities
    }
}

export default connect(mapStateToProps)(ProductsCRUD)
*/

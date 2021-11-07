import React, {useEffect, useState} from "react";
import Table, {TableHeader} from "../shared/Table";
import ProductForm from "./ProductForm";
import {Product} from "../../model/Product";
import {ProductCreator} from "../../model/ProductCreator";
import {connect, useDispatch} from "react-redux";

import * as ProductsAction from '../../redux/Products/Products.actions'

import {errorAlert, infoAlert, questionCallbackAlert, successAlert} from "../shared/dialogs/Alerts";
import {RootState, ThunkDispatch} from "../../redux";

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
const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
    //const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(newEmptyProduct())
    const dispatch: ThunkDispatch = useDispatch();

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        await dispatch(ProductsAction.getProducts())
            .catch(handlerUnexpectedError)
    }

    const handlerUnexpectedError = (e:unknown) => errorAlert(`Unexpected Error happens: ${e}`)

    /**
     * on table delete handle
     */
    const handleProductDelete = (product: Product) => {
        questionCallbackAlert({
            questionTitle: 'Are you sure?',
            questionText: "You won't be able to revert this!",
            confirmButtonText: `Yes, delete ${product.name}!`,

            chain: () => product._id && deleteProduct(product._id),
        })
    }

    const deleteProduct = async (id: string) => {
        await dispatch(ProductsAction.deleteExistingProduct(id))
            .then(() => successAlert('Product successfully deleted'))
            .catch(handlerUnexpectedError)
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
        await dispatch(ProductsAction.updateExistingProduct(otherProduct))
            .catch(handlerUnexpectedError)
            .finally(resetFormProducts)
    }

    const handleFormProductAdd = async (otherProduct: ProductCreator) => {
        const newProductCreator: ProductCreator = {
            name: otherProduct.name,
            price: otherProduct.price,
            stock: otherProduct.stock
        };

        await dispatch(ProductsAction.insertNewProduct(newProductCreator))
            .catch(handlerUnexpectedError)
            .finally(resetFormProducts)
    }

    return (
        <React.Fragment>
            <Table
                headers={headers}
                data={props.products}
                enableActions={true}
                onDelete={handleProductDelete}
                onDetail={handleProductDetail}
                onEdit={handleEditSelect}
            />

            <ProductForm
                product={selectedProduct}
                onCancel={resetFormProducts}
                onUpdate={handleFormProductUpdate}
                onSubmit={handleFormProductAdd}/>
        </React.Fragment>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        products: state.products
    }
}


//export default ProductsCRUD;

export default connect(mapStateToProps)(ProductsCRUD)

import React, {useEffect, useState} from "react";
import Table, {TableHeader} from "../shared/Table";
import ProductForm from "./ProductForm";
import {Product} from "../../model/Product";
import {ProductCreator} from "../../model/ProductCreator";
import {connect, useDispatch} from "react-redux";
import {
    deleteExistingProduct,
    getProducts,
    insertNewProduct,
    updateExistingProduct
} from "../../redux/Products/Products.actions";
import {errorAlert, infoAlert, questionCallbackAlert, successAlert} from "../shared/dialogs/Alerts";

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

    const dispatch = useDispatch();

    async function fetchData() {
        try {
            await dispatch(getProducts())
        } catch (e) {
            errorAlert(`Unexpected error: ${e}`)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])



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

                dispatch(deleteExistingProduct(productId))

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

            dispatch(updateExistingProduct(otherProduct))
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

            dispatch(insertNewProduct(newProductCreator))

            resetFormProducts()

        } catch (err) {
            let message = `Some problem happen: ${err}`
            errorAlert(message)
        }
    }

    return (
        <React.Fragment>
            <Table
                headers={headers}
                data={props.products}
                enableActions={true}
                onDelete={handleDeleteClick}
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

const mapStateToProps = (state: any) => {
    return {
        products: state.products
    }
}


//export default ProductsCRUD;

export default connect(mapStateToProps)(ProductsCRUD)

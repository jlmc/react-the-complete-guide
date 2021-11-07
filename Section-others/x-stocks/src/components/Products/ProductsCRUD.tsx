import React, {useEffect, useState} from "react";
import Table, {TableHeader} from "../shared/Table";
import ProductForm from "./ProductForm";
import {Product} from "../../model/Product";
import Swal from "sweetalert2";
import {deleteSingleProduct, updateSingleProduct} from "../../service/Products.service";
import {ProductCreator} from "../../model/ProductCreator";
import {connect, useDispatch} from "react-redux";
import {insertNewProduct} from "../../redux/Products/Products.actions";

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

    // only on the creation
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        //const _products = await getAllProducts()
        //setProducts(_products)
    }

    /**
     * on table delete handle
     */
    const handleDeleteClick = (product: Product) => {
        Swal
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#09f',
                cancelButtonColor: '#d33',
                confirmButtonText: `Yes, delete ${product.name}!`
            })
            .then((result) => {
                if (result.value) {
                    deleteProduct(product._id)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
    }

    const deleteProduct = async (productId?: string) => {
        if (productId) {
            try {
                await deleteSingleProduct(productId)
                fetchData()
                Swal.fire('Uhul!', 'Product successfully deleted', 'success')
            } catch (err) {
                let message = `Some problem happen: ${err}`
                Swal.fire('Oops!', message, 'error')
            }
        }
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
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
            await updateSingleProduct(otherProduct)
            resetFormProducts()
            fetchData()
        } catch (err) {
            let message = `Some problem happen: ${err}`
            Swal.fire('Oops!', message, 'error')
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

        } catch (err) {
            let message = `Some problem happen: ${err}`
            Swal.fire('Oops!', message, 'error')
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

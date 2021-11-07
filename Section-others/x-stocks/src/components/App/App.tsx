import Swal from 'sweetalert2'

import React, {useEffect, useState} from 'react';
import Header from "../Header";
import Container from "../shared/Container";
import Table, {TableHeader} from "../shared/Table";
import ProductForm from "../Products/ProductForm";
import {getAllProducts} from "../../service/Products.service";
import {Product} from "../../model/Product";

// function TestComponent() {
//     return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon"/>
// }

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

function App() {
    //const [street, setStreet] = useState('')
    const [products, setProducts] = useState<Product[]>([]);
    //const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(products[0])
    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(newEmptyProduct())

    // only on the creation
    useEffect(() => {
        async function fetchData() {
            const _products = await getAllProducts()
            setProducts(_products)
        }

        fetchData()
    }, [])


    const handleFormProductUpdate = (otherProduct: Product) => {
        console.log(otherProduct)

        /*   const productOToUpdate: Product | undefined =
               products.find(it => it._id === otherProduct._id);*/

        const products1: Product[] =
            products.map(product => product._id === otherProduct._id ? otherProduct : product);
        setProducts(products1)

        setSelectedProduct(newEmptyProduct())
    }

    /**
     * on form add action handle
     */
    const handleFormProductAdd = (otherProduct: Product) => {
        const newId: number = products.length + 1

        let product: Product = {
            _id: String(newId),
            ...otherProduct
        }

        setProducts([...products, product])

        //setSelectedProduct(product)
        setSelectedProduct(newEmptyProduct())
    }

    /**
     * on table edit handle
     */
    const handleEditSelect = (product: Product) => {
        setSelectedProduct(product)
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

    const deleteProduct = (productId?: string) => {
        setProducts(products.filter(product => product._id !== productId))
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        )

    }

    const handleFormProductCancel = () => {
        setSelectedProduct(undefined)
    }

    return (
        <div>
            <Header title="x-stocks"/>
            <Container>
                <Table
                    headers={headers}
                    data={products}
                    enableActions={true}
                    onDelete={handleDeleteClick}
                    onDetail={handleProductDetail}
                    onEdit={handleEditSelect}
                />

                <ProductForm
                    product={selectedProduct}
                    onCancel={handleFormProductCancel}
                    onUpdate={handleFormProductUpdate}
                    onSubmit={handleFormProductAdd}/>
            </Container>
        </div>
    );
}

export default App;

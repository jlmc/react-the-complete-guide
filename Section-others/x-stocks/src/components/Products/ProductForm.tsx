import React, {useEffect, useState} from "react";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import {Product} from "../shared/Table/Table.mockdata";

export interface ProductCreator {
    name: string
    price: number,
    stock: number
}

export interface ProductUpdater {
    id: number,
    name: string
    price: number,
    stock: number
}

export interface ProductFormProps {
    product?: Product
    onSubmit?: (product: ProductCreator) => void
    onUpdate?: (product: ProductUpdater) => void
    onCancel?: () => void
}

declare interface InitialFormState {
    id?: number,
    name: string,
    price: string,
    stock: string
}

function buildInitialState(product?: Product): InitialFormState {
    return product ? {
            id: product.id,
            name: product.name,
            price: String(product.price),
            stock: String(product.stock),
        }
        : {
            name: '',
            price: '',
            stock: ''
        }
}

const ProductForm: React.FC<ProductFormProps> = (props) => {

    //const initialFormState: InitialFormState = getInitialFormState(props.product)
    const initialFormState: InitialFormState = buildInitialState(props.product)

    const [form, setForm] = useState(initialFormState);


    useEffect(() => {
        setForm(initialFormState)
    }, [props.product])


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name}: EventTarget & HTMLInputElement = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleFormOnSubmit = () => {
        form.id
            ? updateProduct(form)
            : createProduct(form)
    }

    const updateProduct = (formState: InitialFormState) => {
        const productDto = {
            id: Number(formState.id),
            name: String(formState.name),
            price: parseFloat(formState.price),
            stock: Number(formState.stock),
        }

        props.onUpdate && props.onUpdate(productDto)

        //setForm(buildInitialState(undefined))
    }

    const createProduct = (formState: InitialFormState) => {
        const productDto = {
            name: String(formState.name),
            price: parseFloat(formState.price),
            stock: Number(formState.stock)
        }

        props.onSubmit && props.onSubmit(productDto)

        //setForm(buildInitialState(undefined))
    }

    return <React.Fragment>
        <Form title="Product details"
              onSubmit={handleFormOnSubmit}>
            <Input label="Name"
                   value={form.name}
                   required
                   placeholder="Cookie"
                   name="name"
                   onChange={handleInputChange}/>
            <Input label="Price"
                   value={form.price}
                   required
                   type="number"
                   step="0.01"
                   placeholder="99.12"
                   name="price"
                   onChange={handleInputChange}/>
            <Input label="Stock"
                   value={form.stock}
                   required type="number"
                   min="0"
                   step="0.01"
                   placeholder="0"
                   name="stock" onChange={handleInputChange}/>
            <Button>
                {
                    form.id ? 'Update' : 'Add'
                }
            </Button>
            {
                props.onCancel && <Button onClick={props.onCancel}>Cancel</Button>
            }
        </Form>
    </React.Fragment>
}

export default ProductForm

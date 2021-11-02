import React, {useState} from "react";
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
}

declare interface InitialFormState {
    id?: number,
    name: string,
    price: string,
    stock: string
}

const ProductForm: React.FC<ProductFormProps> = (props) => {

    const getInitialFormState = (product?: Product) => {
        return product ?
            {
                id: product.id,
                name: product.name,
                price: String(product.price),
                stock: String(product.stock)
            }
            : {
                name: '',
                price: '',
                stock: ''
            };
    }

    const initialFormState: InitialFormState = getInitialFormState(props.product)

    const [form, setForm] = useState(initialFormState);

    function onFormUpdate(event: React.FormEvent<HTMLFormElement>) {
        if (!props.product) return

        const productUpdater: ProductUpdater = {
            id: props.product.id,
            name: String(form.name),
            price: parseFloat(form.price),
            stock: Number(form.stock)
        };

        props.onUpdate && props.onUpdate(productUpdater)

        setForm(initialFormState)
    }

    function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        const productCreator: ProductCreator = {
            name: String(form.name),
            price: parseFloat(form.price),
            stock: Number(form.stock)
        };

        props.onSubmit && props.onSubmit(productCreator)

        setForm(initialFormState)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name}: EventTarget & HTMLInputElement = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return <React.Fragment>
        <Form title="Product details" onSubmit={props.product ? onFormUpdate : onFormSubmit}>
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
            <Button>Save</Button>
        </Form>
    </React.Fragment>
}

export default ProductForm

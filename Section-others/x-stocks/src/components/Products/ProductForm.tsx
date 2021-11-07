import React, {useEffect, useState} from "react";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import {Product} from "../../model/Product";
import {ProductCreator} from "../../model/ProductCreator";
import {ProductUpdater} from "../../model/ProductUpdater";

export interface ProductFormProps {
    product?: Product
    onSubmit?: (product: ProductCreator) => void
    onUpdate?: (product: ProductUpdater) => void
    onCancel?: () => void
}

declare interface InitialFormState {
    _id?: string,
    name: string,
    price: string,
    stock: string


}

function buildInitialState(product?: Product): InitialFormState {
    return product && product._id ? {
            _id: product._id,
            name: product.name,
            price: String(product.price),
            stock: String(product.stock),
        }
        : {
            _id: undefined,
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

        console.log(`===> ${Date.now()} - ON set FORM DATA: ${JSON.stringify(initialFormState)}`)

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
        form._id
            ? updateProduct(form)
            : createProduct(form)
    }

    const updateProduct = (formState: InitialFormState) => {
        if (formState._id && props.onUpdate) {
            const s: ProductUpdater = {
                _id: formState._id,
                name: String(formState.name),
                price: parseFloat(formState.price),
                stock: Number(formState.stock)
            }
            props.onUpdate(s)
        }
        //props.onUpdate && props.onUpdate(productDto)
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

    function handleCancel() {
        props.onCancel && props.onCancel()
    }

    return <React.Fragment>
        <Form title="Product details"
              onSubmit={handleFormOnSubmit} >
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
                   step="0.5"
                   placeholder="99.12"
                   name="price"
                   onChange={handleInputChange}/>
            <Input label="Stock"
                   value={form.stock}
                   required type="number"
                   min="0"
                   step="1"
                   placeholder="1"
                   name="stock" onChange={handleInputChange}/>
            <Button>
                {
                    form._id ? 'Update' : 'Add'
                }
            </Button>
        </Form>
    </React.Fragment>
}

export default ProductForm

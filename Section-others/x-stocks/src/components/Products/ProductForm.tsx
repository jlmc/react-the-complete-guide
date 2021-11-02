import React, {useState} from "react";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

const ProductForm: React.FC = (props) => {
    const [form, setForm] = useState(initialFormState);

    function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log("----")
        console.log(form)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name }: EventTarget & HTMLInputElement = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return <React.Fragment>
        <Form title="Product details" onSubmit={onFormSubmit}>
            <Input label="Name" required placeholder="Cookie" name="name" onChange={handleInputChange}/>
            <Input label="Price" required type="number" step="0.01" placeholder="99.12" name="price" onChange={handleInputChange}/>
            <Input label="Stock" required type="number" min="0" step="0.01" placeholder="0" name="stock" onChange={handleInputChange}/>
            <Button>Save</Button>
        </Form>
    </React.Fragment>
}

export default ProductForm

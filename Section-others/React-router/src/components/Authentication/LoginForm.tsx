import React, {useEffect, useState} from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import Form from "../shared/Form";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {User} from "../../service/Authentication.service";
import {Credentials, signIn} from "../../redux/Authentication/Authentication.actions";
import {useNavigate} from "react-router-dom";
import {PENDING, SUCCEEDED} from "../../redux/Authentication/Authentication.slice";

const LoginForm = () => {
    const [form, setForm] = useState({
        user: '',
        pass: ''
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const user: User | undefined = useAppSelector(state => state.authentication.user);
    const loading: String | undefined = useAppSelector(state => state.authentication.loading);

    useEffect(() => {
        if (user && loading === SUCCEEDED) {
            navigate("/", {replace: true})
        }
    }, [navigate, user, loading])

    const handleLogin = () => {
        console.table(form)

        let credentials = {
            username: 'abc', pass: '122'
        } as Credentials;

        dispatch(signIn(credentials))
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <>
            {loading === PENDING && <div>login in progress...</div>}
            {loading !== PENDING &&
            <Form title="Login - x-stock" onSubmit={handleLogin}>
                <Input
                    label="User"
                    name="user"
                    value={form.user}
                    onChange={handleInputChange}
                    placeholder="E.g.: your_user_name321"
                />
                <Input
                    type="password"
                    name="pass"
                    value={form.pass}
                    onChange={handleInputChange}
                    label="Password"
                />
                <Button>
                    Login
                </Button>
            </Form>
            }
        </>
    )
}

export default LoginForm

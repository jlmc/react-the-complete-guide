import React, {useState} from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import Form from "../shared/Form";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {User} from "../../service/Authentication.service";
import {Credentials, signIn} from "../../redux/Authentication/Authentication.actions";

const LoginForm = () => {
    const [form, setForm] = useState({
        user: '',
        pass: ''
    });

    const dispatch = useAppDispatch();
    const user: User | undefined = useAppSelector(state => state.authentication.user);

    /*
      const dispatch = useDispatch();
  const username = useSelector(state => state.authentication.username);
     */

    const handleLogin = () => {
        console.table(form)

        let credentials = {
            username: 'abc', pass: '122'
        } as Credentials;

        dispatch(signIn(credentials))
    }


/*    function loginHandle(event) {
        event.preventDefault();
        let passwordValue = passwordTextInput.current.value;
        console.log("Password: " + passwordValue)
        console.log("Username: " + usernameValue)

        dispatch(authenticationSliceActions.login({
            username: usernameValue,
            password: passwordValue
        }))
    }*/

    /*
        useEffect(() => {
        appDispatch(ProductActions.fetchAllProducts(1234))
    }, [appDispatch])
     */

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return (
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
                label="Passowrd"
            />
            <Button>
                Login
            </Button>
        </Form>
    )
}

export default LoginForm

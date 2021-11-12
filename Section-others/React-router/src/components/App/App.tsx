import React, {useEffect} from 'react';
import ProductsView from "../../views/ProductsView";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NotFoundView from "../../views/NotFoundView";
import LoginView from "../../views/LoginView";
import ProfileView from "../../views/ProfileView";
import {injectStore} from "../../http/http";
import {useAppSelector} from "../../hooks";

// function TestComponent() {
//     return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon"/>
// }

function App() {

    const useAppSelector1 = useAppSelector(state => state);

    useEffect(() => {
        injectStore(useAppSelector1)
    }, [])

    return (
        <div>
            <BrowserRouter>


                <Routes>
                    <Route path={"/"} element={<Navigate to="/products" />}/>
                    <Route path="/products" element={<ProductsView/>}/>
                    <Route path="/login" element={<LoginView/>}/>
                    <Route path="/profile" element={<ProfileView/>}/>

                    <Route
                        path="*"
                        element={
                            <NotFoundView/>
                        }
                    />
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;

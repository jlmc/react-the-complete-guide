import React, {useEffect} from 'react';
import HomeView from "../../views/HomeView";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
                    <Route path="/" element={<HomeView/>}/>
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

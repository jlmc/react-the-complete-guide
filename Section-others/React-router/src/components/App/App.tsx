import React from 'react';
import HomeView from "../../views/HomeView";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// function TestComponent() {
//     return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon"/>
// }

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>

                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;

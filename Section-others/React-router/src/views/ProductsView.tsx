import React from "react";
import Header from "../components/Header";
import ProductsCRUD from "../components/Products/ProductsCRUD";
import Container from "../components/shared/Container";

const ProductsView = () => {
    return <React.Fragment>
        <Header title="x-stock"/>
        <Container>
            <ProductsCRUD/>
        </Container>
    </React.Fragment>
}

export default ProductsView

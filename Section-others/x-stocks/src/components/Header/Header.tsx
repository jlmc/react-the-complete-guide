import React from "react";
import './Header.css'
import {RootState} from "../../redux";
import {connect} from "react-redux";
import {Product} from "../../model/Product";

declare interface HeaderProps {
    title: string,
    fistProduct?: Product
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className="AppHeader">
            <h1>{props.title}</h1>

            {
                props.fistProduct && <span>
                    {` -  ${props.fistProduct.name}`}
                </span>
            }
            <span>

            </span>
        </header>)
}

const mapStateToProps = (state: RootState) => {
    return {
        fistProduct: state.products[0]
    }
}

export default connect(mapStateToProps)(Header)
//export default Header

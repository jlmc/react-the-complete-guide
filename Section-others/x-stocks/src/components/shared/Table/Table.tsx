import React from "react";
import './Table.scss'
import Products from "./Table.mockdata";

const headers = [
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price'},
    {key: 'stock', value: 'Available Stock'}
]

const Table: React.FC = (props, context) => {
    return <React.Fragment>
        <table className="Table">
            <thead>
            <tr>
                {
                    headers.map((item, index) => {
                        return <th key={item.key}
                                   className={(index === headers.length - 1) ? "right" : ""}>{item.value}</th>
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                Products.map((product, index) => {
                    return <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td className="right">{product.stock}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </React.Fragment>
}

export default Table

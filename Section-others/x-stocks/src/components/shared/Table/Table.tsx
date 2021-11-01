import React from "react";
import './Table.scss'

const Table: React.FC = (props, context) => {
    return <React.Fragment>
        <table className="Table">
            <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th className="right">Stock</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Cookie</td>
                <td>$1.25</td>
                <td className="right">23</td>
            </tr>
            <tr>
                <td>Milk 1L</td>
                <td>$0.99</td>
                <td className="right">10</td>
            </tr>
            <tr>
                <td>Cookie</td>
                <td>$1.25</td>
                <td className="right">23</td>
            </tr>
            <tr>
                <td>Milk 1L</td>
                <td>$0.99</td>
                <td className="right">10</td>
            </tr>
            </tbody>
        </table>
    </React.Fragment>
}

export default Table

import React from "react";
import './Table.scss'
import {IndexedHeaders, organizeData, OrganizedItem} from "./organizeData";

export declare interface TableHeader {
    key: string
    value: string
    right?: boolean
}

declare interface TableProps {
    headers: TableHeader[],
    data: any[],

    enableActions?: boolean

    onDelete?: (item: any) => void
    onDetail?: (item: any) => void
    onEdit?: (item: any) => void
}

const Table: React.FC<TableProps> = (props, context) => {

    //const [organizedData, indexedHeaders]: [OrganizedItem[], IndexedHeaders] = organizeData(Products, headers);
    const [organizedData, indexedHeaders]: [OrganizedItem[], IndexedHeaders] = organizeData(props.data, props.headers);

    console.table(organizedData)
    console.table(indexedHeaders)

    return <React.Fragment>
        <table className="Table">
            <thead>
            <tr>
                {
                    props.headers.map(header =>
                        <th
                            className={header.right ? 'right' : ''}
                            key={header.key}
                        >
                            {header.value}
                        </th>
                    )
                }
            </tr>
            </thead>
            <tbody>
            {
                organizedData.map((row, i) => {
                    return <tr key={i}>
                        {
                            Object
                                .keys(row)
                                .map((item, i) =>
                                    item !== '$original'
                                        ? <td
                                            key={row.$original.id + i}
                                            className={indexedHeaders[item].right ? 'right' : ''}
                                        >
                                            { row[item] }
                                        </td>
                                        : null
                                )
                        }
                    </tr>
                })
            }
            </tbody>
        </table>
    </React.Fragment>
}

export default Table

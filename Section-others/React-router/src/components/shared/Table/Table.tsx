import React from "react";
import './Table.scss'
import {IndexedHeaders, organizeData, OrganizedItem} from "./organizeData";
import Button from "../Button";
import {NavLink, useLocation} from "react-router-dom";
import {parse} from "query-string"; // yarn add query-string

export declare interface TableHeader {
    key: string
    value: string
    right?: boolean
}

declare interface TableProps {
    headers: TableHeader[],
    data: any[],

    enableActions?: boolean

    itemPerPage?: number

    onDelete?: (item: any) => void
    onDetail?: (item: any) => void
    onEdit?: (item: any) => void
}

const Table: React.FC<TableProps> = (props, context) => {
    const location = useLocation();
    //const [organizedData, indexedHeaders]: [OrganizedItem[], IndexedHeaders] = organizeData(Products, headers);
    const currentPage = parseInt(parse(location.search).page as string) || 1
    const [organizedData, indexedHeaders, totalPages]: [OrganizedItem[], IndexedHeaders, number] = organizeData(props.data, props.headers, currentPage, props.itemPerPage || 5);
    //console.table(organizedData)
    //console.table(indexedHeaders)

    //console.table(location)
    //console.log(currentPage)

    const isActive = (index: number) => {
        return currentPage === index + 1
    }

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
                {
                    props.enableActions && <th className="right">Actions</th>
                }
            </tr>
            </thead>
            <tbody>
            {
                organizedData.map((row: OrganizedItem, rowIndex: number) => {
                    return <tr key={rowIndex}>
                        {
                            Object
                                .keys(row)
                                .map((item: string, itemIndex: number) =>
                                    item !== '$original'
                                        ? <td

                                            key={`${row.$original._id}-${itemIndex}`}
                                            className={indexedHeaders[item].right ? 'right' : ''}
                                        >
                                            <label hidden={itemIndex === 0}>{row[item]}</label>
                                        </td>
                                        : null
                                )
                        }
                        {
                            props.enableActions
                            && <td className='right actions'>
                                {
                                    props.onEdit
                                    && <Button
                                        onClick={() => props.onEdit && props.onEdit(row)}>
                                        Edit
                                    </Button>
                                }
                                {
                                    props.onDetail
                                    && <Button
                                        onClick={() => props.onDetail && props.onDetail(row)}>
                                        Detail
                                    </Button>
                                }
                                {
                                    props.onDelete
                                    && <Button
                                        onClick={() => props.onDelete && props.onDelete(row)}>
                                        Delete
                                    </Button>
                                }
                            </td>
                        }
                    </tr>
                })
            }
            </tbody>
        </table>
        <div className="table-pagination">
            {
                Array(totalPages)
                    .fill('')
                    .map((_, i) => {
                        return <NavLink
                            key={`p_${i}`}
                            to={`/products?page=${i + 1}`}

                            className={isActive(i) ? 'selected' : ''}
                        >{i + 1}</NavLink>
                    })

            }
        </div>
    </React.Fragment>
}

export default Table

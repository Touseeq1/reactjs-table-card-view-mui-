import React, { useMemo } from 'react'
import { COLUMN } from './Column'
import DATA from './MokData.json'
import { useTable } from 'react-table'
const Mytable = () => {
    const data = useMemo(() => DATA, [])
    const columns = useMemo(() => COLUMN, [])
    const { getTableProps, getTableBodyProps, headerGroups, rows } = useTable({ data, columns })
    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGr) => (
                            <tr {...headerGr.getHeaderGroupProps()}>
                                {headerGr.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    
                </tbody>

            </table>
        </div>
    )
}

export default Mytable
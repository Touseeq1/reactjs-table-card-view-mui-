import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MokData from './MokData.json'
import { COLUMN, GROUPED_COLUMNS } from './Column'
const Newtable = () => {
 
  const data = useMemo(() => MokData, [])
  const columns = useMemo(() => COLUMN, [])
 
  const tableInstace = useTable({
    columns,
    data
  });
  console.log("item",tableInstace)
  const { getTableProps, getTableBodyProps, footerGroups, headerGroups, rows, prepareRow } = tableInstace
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGr) => (
            <tr {...headerGr.getHeaderGroupProps()}>
              {headerGr.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>))}
            </tr>))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((roww) => {
            prepareRow(roww)
            return (<tr {...roww.getRowProps()}>
              {roww.cells.map((cell) => { return <td {...cell.getCellProps()}>{cell.render("Cell")}</td> })}
            </tr>)
          })}
        </tbody>
        <tfoot>
          {
            footerGroups.map((footerGr) => (
              <tr {...footerGr.getFooterGroupProps()}>
                {
                  footerGr.headers.map((column) => (
                    <td {...column.getFooterProps}>
                      {
                        column.render('Footer')
                      }</td>))}</tr>))}
        </tfoot>
      </table>
    </div>)
}

export default Newtable
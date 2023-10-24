import React from 'react'
import axios from "axios";
import Header from '../components/Header'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link, useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Typography, Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import { flexRender, useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table'
import { useState, useEffect, useMemo } from "react";
import { COLUMN } from '../components/Columns'
const Landingpage = () => {
    const [liststate, setListstate] = useState([]);
    const [sorting, setSorting] = useState([])
    const [filtring, setFiltring] = useState('')
    console.log("LisState", liststate)
    useEffect(() => {
        async function getListdata() {
            try {
                const res = await fetch('http://localhost:3333/data')
                const data = await res.json()
                console.log("stuDD", data)
                setListstate(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        getListdata()
    }, [])
    // Table start here
    const columns = useMemo(() => COLUMN, [])
    const data = useMemo(() => liststate, [])
    console.log("Data", data)
    const table = useReactTable({
        columns, data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtring
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltring
    })
    console.log("Table", table)

    return (
        <div>
            <Box>
                <Box p={2}>
                    <Typography variant='h4'>A Landing page with Data Table view & Card view Using React js(MUI)</Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Box p={2}>
                        <TextField fullWidth label="Enter Text to Filter or Search" value={filtring} onChange={(e) => setFiltring(e.target.value)} />
                    </Box>
                    <Box p={2}>
                        <Typography variant="h5">Click Title to Sort Data</Typography>
                    </Box>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <TableCell align="center" key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                            {{ asc: '🔼', desc: '🔽' }[header.column.getIsSorted() ?? null]}
                                        </TableCell>
                                    ))}

                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {table.getRowModel().rows.map(row => (
                                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    {row.getVisibleCells().map((cell => (
                                        <TableCell key={cell.id} align="center">{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    )))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box p={2}>
                    <Button variant="outlined" onClick={() => table.setPageIndex(0)}>First</Button>
                    <Button variant="text" disabled={!table.getCanPreviousPage()} onClick={table.previousPage}>Previous</Button>
                    <Button variant="text" disabled={!table.getCanNextPage()} >Next</Button>
                    <Button variant="outlined" onClick={() => table.setPageIndex(table.getPageCount() - 1)} >Last</Button>
                </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
                <Grid sx={{ bgcolor: '#cfe8fc', p: 1 }} container spacing={2} >

                    {liststate.map((val) => (
                        <Grid item sm={6} xs={12} md={3} lg={2.4} xl={2.4}>
                            <Card >
                               
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div">
                                        {val.title}
                                    </Typography>
                                    <Typography variant="p" color="text.secondary">
                                        {val.address}
                                        <h3>Beds:{val.beds} Bath:{val.bath}</h3>
                                        <h3>CoveredAreaSQFT:{val.coveredAreaSQFT} PropertyType:{val.propertyType}</h3>
                                        <h3>Price:{val.price}</h3>
                                    </Typography>
                                </CardContent>
                                <CardActions style={{display:"flex",justifyContent:"center"}}>
                                    <Link style={{ textDecoration: 'none' }} to={`/detail/${val.id}`} size="small">View Detail</Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
}
                </Grid>
            </Box>

        </div>
    )
}

export default Landingpage
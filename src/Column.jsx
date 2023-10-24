export const COLUMN = [
    {
        Header: 'ID',
        Footer: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
    },
    {
        Header: 'Address',
        Footer: 'Address',
        accessor: 'address'
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
    }

]
export const GROUPED_COLUMNS = [  
    {
        Header: 'ID',
        Footer: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Name Group',
        Footer: 'Name Group',
        columns: [
            {
                Header: 'Name',
                Footer: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            },
        ]
    },
    {
        Header: 'Address Group',
        Footer: 'Address Group',
        columns: [
            {
                Header: 'Address',
                Footer: 'Address',
                accessor: 'address'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            }

        ]
    }
]
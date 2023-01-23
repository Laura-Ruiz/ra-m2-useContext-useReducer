import React from 'react'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'
import { urls } from '../constants'
import useFetch from '../hooks/useFetch'

const columns = [
  {
    id: 'title',
    label: 'Título',
  },
  {
    id: 'price',
    label: 'Precio',
    cell: (row) => (
      <span style={{ color: row.price < 500000 ? 'green' : 'red' }}>
        {row.price}€
      </span>
    ),
  },
  {
    id: 'type',
    label: 'Tipo',
    // Aquí deberías de tener una prop tipo sortColumn: true, o similar
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'district',
    label: 'Districto',
  },
]

function Data() {
  const houses = useFetch(urls.houses)
  const { isLoading, data } = houses

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} isLoading={isLoading} />
      </Container>
    </Body>
  )
}

export default Data

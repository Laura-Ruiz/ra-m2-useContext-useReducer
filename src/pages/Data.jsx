import React from 'react'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'

const columns = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'surnames',
    label: 'Apellidos',
  },
  {
    id: 'age',
    label: 'Edad',
    cell: (row) => (
      <span style={{ color: row.age > 50 ? 'green' : 'red' }}>{row.age}</span>
    ),
  },
  {
    id: 'occupation',
    label: 'Ocupacion',
  },
]

// Lo he puesto así para comprobar que funciona la paginación, no sé si los datos tendrán que venir más adelante de otra API.
const data = [
  {
    id: 1,
    name: 'Juan',
    surnames: 'Perez',
    age: 25,
    occupation: 'Developer',
  },
  {
    id: 2,
    name: 'Pedro',
    surnames: 'Gomez',
    age: 75,
    occupation: 'Developer',
  },
  {
    id: 3,
    name: 'Juan',
    surnames: 'Perez',
    age: 25,
    occupation: 'Developer',
  },
  {
    id: 4,
    name: 'Pedro',
    surnames: 'Gomez',
    age: 75,
    occupation: 'Developer',
  },{
    id: 5,
    name: 'Juan',
    surnames: 'Perez',
    age: 25,
    occupation: 'Developer',
  },
  {
    id: 6,
    name: 'Pedro',
    surnames: 'Gomez',
    age: 75,
    occupation: 'Developer',
  },{
    id: 7,
    name: 'Juan',
    surnames: 'Perez',
    age: 25,
    occupation: 'Developer',
  },
  {
    id: 8,
    name: 'Pedro',
    surnames: 'Gomez',
    age: 75,
    occupation: 'Developer',
  },{
    id: 9,
    name: 'Juan',
    surnames: 'Perez',
    age: 25,
    occupation: 'Developer',
  },
  {
    id: 10,
    name: 'Pedro',
    surnames: 'Gomez',
    age: 75,
    occupation: 'Developer',
  },{
    id: 11,
    name: 'Juan',
    surnames: 'Perez',
    age: 25,
    occupation: 'Developer',
  },
  {
    id: 12,
    name: 'Pedro',
    surnames: 'Gomez',
    age: 75,
    occupation: 'Developer',
  }
]

function Data() {
  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} />
      </Container>
    </Body>
  )
}

export default Data

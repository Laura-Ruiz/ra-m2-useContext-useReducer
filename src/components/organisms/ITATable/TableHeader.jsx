import React, { useContext, useState } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import { Actions } from './store/reducer'

function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, data } = state

  // Esta muy bien, pero no es necesario que el estado y la lógica de sort este en el componente
  // Lo llevaria a Redux, así la parte de vista se separa de la lógica de negocio.
  const [sortColumn, setSortColumn] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortOrder('asc')
    }
    const sorted = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[column] > b[column] ? 1 : -1
      }
      return a[column] < b[column] ? 1 : -1
    })

    dispatch({ type: Actions.SET_SORTEDDATA, payload: sorted })
  }

  return (
    <thead>
      <tr>
        {columns
          .filter((col) => !col.isHidden)
          .map((col) => (
            <TableCell as="th" key={col.id} onClick={() => handleSort(col.id)}>
              {col.label}
              {/* Crearia un icono especifico con sus estilos y lógica, fuera del TableHeader */}
              {/* Recuerda que el que una columna se pueda ordenar debe ir determinado por el usuario, como una prop de columns */}
              {sortColumn === col.id && (sortOrder === 'asc' ? '↓' : '↑')}
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader

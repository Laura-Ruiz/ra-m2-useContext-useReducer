import React, { useContext, useState } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import { Actions } from './store/reducer'

function TableHeader() {
  const { state, dispatch} = useContext(TableContext)
  const { columns, data } = state

  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
    const sorted = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      }
      return a[column] < b[column] ? 1 : -1;
    });
  
    dispatch({ type: Actions.SET_SORTEDDATA, payload: sorted})

  }; 
 
  
  return (
    <thead>
      <tr>
        {columns
          .filter((col) => !col.isHidden)
          .map((col) => (
            <TableCell as="th" key={col.id} onClick={() => handleSort(col.id)}>
              {col.label}
              {sortColumn === col.id && (sortOrder === 'asc' ? '↓' : '↑')}
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader

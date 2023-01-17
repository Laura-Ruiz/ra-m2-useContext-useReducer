import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import TableFoot from './TableFoot'

function TableBody() {
  const { state } = useContext(TableContext)
  const { data, columns, pagination } = state
  const {currentPage, itemsPerPage } = pagination
  
 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

    return (
    <><tbody>
      {data.slice(startIndex, endIndex).map((d) => (
        <tr key={d.id}>
          {columns
            .filter((col) => !col.isHidden)
            .map((col) => (
              <TableCell key={`${d.id}-${col.id}`}>
                {col.cell ? col.cell(d) : d[col.id]}
              </TableCell>
            ))}
        </tr>
      ))}

    </tbody>
    <TableFoot/>
      </>
  )
}

export default TableBody


import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import { Actions } from './store/reducer'
// eslint-disable-next-line import/no-named-as-default
import IconsTable from '../../molecules/iconsTable'

function TableHeader() {
  const { state, dispatch} = useContext(TableContext)
  const { columns } = state
   
  return (
    <thead>
      <tr>
        {columns
          .filter((col) => !col.isHidden)
          .map((col) => (
            <TableCell as="th" key={col.id} onClick={() => dispatch({ type: Actions.SET_SORTEDDATA, payload: col.id})}>
              {col.label}
              {col.sortColumn &&  <IconsTable column={col.id} />}
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader

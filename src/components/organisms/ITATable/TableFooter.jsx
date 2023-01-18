import React from 'react'
import Pagination from '../../molecules/Pagination'
import ItemsPerPage from '../../molecules/ItemsPerPage'
import { TFooterStyled } from './styles'


export default function TableFooter() {

  return (
    <div>
      <TFooterStyled>
        <Pagination/>
        <ItemsPerPage/>
      </TFooterStyled>
    </div>
  )
}

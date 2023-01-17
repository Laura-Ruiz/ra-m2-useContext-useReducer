import React, { useContext } from 'react'
import { TableContext } from './store/context'
// eslint-disable-next-line import/named
import { Button, Icon, Select, SelectOption } from '../../atoms'
import { SpanStyled, StyledTd } from './styles'

export default function TableFoot() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage, itemsPerPage } = state.pagination

  const handleChange = (event) => {
    const { value } = event.target
    dispatch({ type: 'SET_ITEMSPERPAGE', payload: Number(value) })
  }

  const totalPages = Math.ceil(state.data.length / itemsPerPage);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
    dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage - 1 })
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
        dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage + 1 })
    }
  };

  const options = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
  ]

  return (
    <tfoot>
      <tr>
        <StyledTd>
          <Button
            boxShadow="none"
            backgroundColor="transparent"
            onClick={() => handlePreviousClick()}
          >
            <Icon color="black" icon="arrow_back_ios" />
          </Button>
          <SpanStyled>Página {currentPage} de {totalPages}</SpanStyled>
          <Button
            boxShadow="none"
            backgroundColor="transparent"
            onClick={() => handleNextClick()}
          >
            <Icon color="black" icon="arrow_forward_ios" />
          </Button>
        </StyledTd>
        <td />
        <td />
        <StyledTd justifyContent ="flex-end">
          <SpanStyled>Mostar</SpanStyled>
          <Select
            id="select"
            style={{ margin: '0.5rem' }}
            name="select"
            onChange={handleChange}
            value={itemsPerPage}
          >
            {options.map((option) => (
              <SelectOption value={option.value} key={option.value}>
                {option.label}
              </SelectOption>
            ))}
          </Select>
        </StyledTd>
      </tr>
    </tfoot>
  )
}

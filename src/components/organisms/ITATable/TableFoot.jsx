import React, { useContext } from 'react'
import { TableContext } from './store/context'
// eslint-disable-next-line import/named
import { Button, Icon, Select, SelectOption } from '../../atoms' // El error de aquí es raro...
import { SpanStyled, StyledTd } from './styles'

// LLamarlo TableFooter
export default function TableFoot() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage, itemsPerPage } = state.pagination

  const handleChange = (event) => {
    const { value } = event.target
    dispatch({ type: 'SET_ITEMSPERPAGE', payload: Number(value) })
  }

  const totalPages = Math.ceil(state.data.length / itemsPerPage)

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage - 1 })
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage + 1 })
    }
  }

  // No declarar constantes dentro de una función, cada vez que renderiza vuelve a declararse.
  const options = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
  ]

  return (
    // Al usar tfoot, no puedes introducir divs y generar html valido.
    // Fijate en la consola.
    // Mejor usar un div y darle estilos.
    <tfoot>
      <tr>
        {/* Separar paginación en otro componente */}
        <StyledTd>
          <Button
            boxShadow="none"
            backgroundColor="transparent"
            onClick={() => handlePreviousClick()}
          >
            <Icon color="black" icon="arrow_back_ios" />
          </Button>
          <SpanStyled>
            Página {currentPage} de {totalPages}
          </SpanStyled>
          <Button
            boxShadow="none"
            backgroundColor="transparent"
            onClick={() => handleNextClick()}
          >
            <Icon color="black" icon="arrow_forward_ios" />
          </Button>
        </StyledTd>
        {/* No usar td vacios */}
        <td />
        <td />
        {/* Separar selector de cuantas filas en otro componente */}
        <StyledTd justifyContent="flex-end">
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

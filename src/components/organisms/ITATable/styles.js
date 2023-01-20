import styled from 'styled-components'

export const TableCell = styled.td`
  border: 1px solid;
  padding: 0.5rem;
  max-width: 1rem;
  &:hover {
    cursor: pointer;
  }
  
`

export const TableStyled = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  width: 100%;
`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
`

export const SpanStyled = styled.span`
  display: flex;
  align-items: center;
`

export const TFooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    border-top: none;
`
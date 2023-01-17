import styled from 'styled-components'
import { FlexBox } from '../../../styles'

export const TableCell = styled.td`
  border: 1px solid;
  padding: 0.5rem;
`

export const TableStyled = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  width: 100%;
`

export const DownloadStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
`

export const SpanStyled = styled.span`
  display: flex;
  align-items: center;
`

export const StyledTd = styled(FlexBox)`
flex-direction:row;
justify-content: ${props => props.justifyContent || ""}
`
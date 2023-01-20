import React,{useContext} from 'react'
// eslint-disable-next-line import/named
import { Button,  Icon} from '../atoms';
import { TableContext } from '../organisms/ITATable/store/context';
import { SpanStyled } from '../organisms/ITATable/styles';


export default function Pagination() {

  const { state, dispatch } = useContext(TableContext)
  const { currentPage, itemsPerPage } = state


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
    
  return (
    <div style={{display:"flex"}}>
    <Button
      disabled = {currentPage === 1}
      boxShadow="none"
      backgroundColor="transparent"
      onClick={() => handlePreviousClick()}
      cursor = {currentPage !== 1 ? "pointer" : undefined}
    >
      <Icon color={currentPage === 1 ? "#B5B2B2": "black" } icon="arrow_back_ios" />
    </Button>
    
    <SpanStyled>Página {currentPage} de {totalPages}</SpanStyled>

    <Button
      disabled = {currentPage === totalPages}
      boxShadow="none"
      backgroundColor="transparent"
      onClick={() => handleNextClick()}
      cursor = {currentPage !== totalPages ? "pointer" : undefined}

    >
      <Icon  color={currentPage === totalPages ? "#B5B2B2": "black" } icon="arrow_forward_ios" />
    </Button>
    </div>
  )
}

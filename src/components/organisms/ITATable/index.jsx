import { useEffect, useContext } from 'react'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled, DownloadStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
// eslint-disable-next-line import/named
import { Button } from '../../atoms'

function Table({ columns, data, showHeader = true }) {
  const { dispatch, state } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])


  const handleDownload = () => {
    const jsonData = JSON.stringify(state.data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'table-data.json';
    link.click();
  }

  
  return (
    <>
      <DownloadStyled>
        <Button onClick={handleDownload} backgroundColor = "#38bb47">
          Descargar
        </Button>
      </DownloadStyled>
      {state.isLoading ? "...loadin" :
      <TableStyled>
        {showHeader && <TableHeader />}
        <TableBody />
      </TableStyled>
      }
    </>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

export default ITATable
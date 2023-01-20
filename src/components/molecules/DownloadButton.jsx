import React, {useContext} from 'react'
// eslint-disable-next-line import/named
import  {Button}  from '../atoms';
import { TableContext } from '../organisms/ITATable/store/context';
import handleDownload from '../../helpers/downloadFunction';

export default function DownloadButton() {

    const { state } = useContext(TableContext)

  return (
        <Button onClick={() => handleDownload(state.data, "table-data.json")} backgroundColor = "#38bb47">
          Descargar
        </Button>
  )
}

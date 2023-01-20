import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  sortedData: [],
  currentPage: 1,
  itemsPerPage: 10,
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_SORTEDDATA: 'SET_SORTEDDATA',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_ITEMSPERPAGE: 'SET_ITEMSPERPAGE',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })
      case Actions.SET_SORTEDDATA:
        return createNextState(state, (draft) => {
          draft.sortedData = action.payload
        })
    case Actions.SET_CURRENTPAGE:
      return createNextState(state, (draft) => {
        draft.currentPage = action.payload
      })
    case Actions.SET_ITEMSPERPAGE:
      return createNextState(state, (draft) => {
        draft.itemsPerPage = action.payload
      })
      
    default:
      return state
  }
}

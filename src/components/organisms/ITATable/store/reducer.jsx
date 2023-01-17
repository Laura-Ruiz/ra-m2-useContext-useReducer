import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  pagination: {
    currentPage: 1,
    itemsPerPage: 10
  },

  isLoading: false,
  
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_ITEMSPERPAGE: 'SET_ITEMSPERPAGE',
  SET_LOADING: 'SET_LOADING'
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
    case Actions.SET_CURRENTPAGE:
      return createNextState(state, (draft) => {
        draft.pagination.currentPage = action.payload
      })
    case Actions.SET_ITEMSPERPAGE:
      return createNextState(state, (draft) => {
        draft.pagination.itemsPerPage = action.payload
      })

    case Actions.SET_LOADING:
      return createNextState(state, (draft) => {
        draft.pagination.itemsPerPage = action.payload
      })
      
    default:
      return state
  }
}

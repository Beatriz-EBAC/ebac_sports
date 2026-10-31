
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    alternarFavorito: (state, action: PayloadAction<Produto>) => {
      const existe = state.itens.find(
        (produto) => produto.id === action.payload.id
      )

      if (existe) {
        state.itens = state.itens.filter(
          (produto) => produto.id !== action.payload.id
        )
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { alternarFavorito } = favoritosSlice.actions

export default favoritosSlice.reducer

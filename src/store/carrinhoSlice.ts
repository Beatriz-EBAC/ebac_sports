
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoExiste = state.itens.find(
        (produto) => produto.id === action.payload.id
      )

      if (!produtoExiste) {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer

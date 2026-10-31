
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../store/produtosApi'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading, isError } = useGetProdutosQuery()

  const favoritos = useSelector(
    (state: RootState) => state.favoritos.itens
  )

  if (isLoading) return <p>Carregando produtos...</p>
  if (isError) return <p>Erro ao carregar produtos.</p>

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritos.some(
            (favorito) => favorito.id === produto.id
          )}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent

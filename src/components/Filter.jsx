import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className='filter-options'>
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}> {/* Dispara a função setFilter, muda o state para All, Completed ou Incomplete */}
                    <option value="All">Todas</option>
                    <option value="Completed">Notas no lixo</option>
                    <option value="Incomplete">Não Excluidas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button> {/* Ao clicar nesse botão o setSort muda seu valor para Asc */}
                <button onClick={() => setSort("Desc")}>Desc</button> {/* Ao clicar nesse botão o setSort muda seu valor para Desc */}
            </div>
        </div>
    </div>
  )
}

export default Filter


// 1.	Você deve criar um projeto de gerenciamento de notas que permita ao usuário adicionar, excluir e visualizar notas de recados.
// 2.	Utilize o React Router para criar as rotas para a Home, Notas Adicionadas, Notas Excluídas.
// 3.	Utilize o hook useState para gerenciar o estado no componente.
// 4.	Implemente a funcionalidade de adicionar novas notas. Deve haver um formulário de entrada de título e conteúdo e um botão para adicionar notas.
// 5.	Implemente a funcionalidade de excluir notas.
// 6.	Certifique-se de que seu aplicativo React tenha uma aparência agradável.
// 7.	Use CSS para estilizar o aplicativo.

// 1.	Funcionalidade: O aplicativo deve funcionar conforme as instruções.               					  4 pontos              
// 2.	Uso do hook useState: Deve ser usado para gerenciar o estado das notas.   					  2 pontos
// 3.	Uso do React Router: Deve ser usado para criar as rotas necessárias para paginação.                                                   3 pontos
// 4.	Interface do usuário: O aplicativo deve ser visualmente atraente.                                                                                  3 pontos
// 5.	Código organizado e legível: Seu código deve ser bem estruturado, legível e seguir as melhores práticas do React.   2 pts

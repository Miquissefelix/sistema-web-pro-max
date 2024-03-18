import PageHeader from '@/components/PageHeader'
import ProductTableRow from '@/components/ProductTableRow'
import React from 'react'

export default function page({i}) {
  return (
    <>
     <PageHeader title="Lista de Productos">   Aqui voce pode listar e visualizar os Productos registados no sistema </PageHeader>

  <section className="mt-8">
        <p className="mb-4">Usuarios totais: 8</p>
        <table className="w-full">
          {/* cabecalho */}
          <thead className="bg-zinc-700 text-white">
            {/* o pading p-2 sera adicionado automaticamente para todos */}
            <tr className="text-left">
                <th></th>
              <th className="p-2">Nome</th>
              <th>Categoria</th>
              <th>Qtd</th>
              <th>Custo(Mzn)</th>
              <th>Custo/Total</th>
              <th>Preco(Mzn)</th>
              <th>Preco/Total</th>
              <th>Acoes</th>
            </tr>
          </thead>
          <tbody>
           <ProductTableRow i={1}/>
           <ProductTableRow i={2}/>
           <ProductTableRow i={3}/>
           <ProductTableRow i={4}/>
          </tbody>
        </table>
      </section>
  </>
  )
}

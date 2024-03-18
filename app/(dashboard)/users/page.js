import PageHeader from "@/components/PageHeader";
import UserTableRow from "@/components/UserTableRow";

import React from "react";

export default function page() {
  return (
    <>
    {/* page header component */}
   <PageHeader title="Lista de Usuarios">   Aqui voce pode listar e visualizar os usuarios registados no sistema </PageHeader>
      <section className="mt-8">
        <p className="mb-4">Usuarios totais: 8</p>
        <table className="w-full">
          {/* cabecalho */}
          <thead className="bg-zinc-700 text-white">
            {/* o pading p-2 sera adicionado automaticamente para todos */}
            <tr className="text-left">
                <th></th>
              <th className="p-2">Nome</th>
              <th>Email</th>
              <th>Funcao</th>
              <th>Idade</th>
              <th>Genero</th>
              <th>Telefone</th>
              <th>Acoes</th>
            </tr>
          </thead>
          <tbody>
           <UserTableRow i={1}/>
           <UserTableRow i={2}/>
           <UserTableRow i={3}/>
           <UserTableRow i={4}/>
          </tbody>
        </table>
      </section>
    </>
  );
}

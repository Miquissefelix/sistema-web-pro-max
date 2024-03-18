"use client";

import PageHeader from "@/components/PageHeader";
import UserForm from "@/components/UserForm";
import { useState } from "react";

export default function page() {
  const[isLoading,setIsLoading]=useState(false)
  const handleCreateUser = (e) => {
    e.preventDefault();
    setIsLoading(true)
    //recebendo do formulario
    const formData = new FormData(e.target);

    //transformando os objectos numa forma mais facil de ler
    const userData = {};
    for (const [key, value] of formData.entries()) {
      userData[key] = value;
    }

    //recebendo dados atraves da rota
    fetch("/api/users", {
      method: "POST",
      //formData
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ocorreu um erro criando usuario!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        alert("Usuario" + userData.email + "Criado com Sucesso");
      }).catch((err)=>{
        'Ocorreu um erro criando o usuario' + userData.email
      });
  };
  return (
    <>
      <PageHeader title="Criar Novo Usuario">
        {" "}
        Aqui voce pode criar um novo usuario
      </PageHeader>

      <section className="mt-8">
        <UserForm onSubmit={handleCreateUser} isLoading ={isLoading}/>
      </section>
    </>
  );
}

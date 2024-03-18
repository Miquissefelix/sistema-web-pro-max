import React from 'react'

export default function PageHeader({title,children:description}) {
  return (
    <header>
    <h2 className="text-2xl font-bold text-orange-500">
     {title}
    </h2>
    <p>
      {/* Aqui voce pode listar e visualizar os usuarios registados no sistema */}
      {description}
    </p>
  </header>
  )
}

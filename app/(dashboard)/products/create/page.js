import PageHeader from "@/components/PageHeader";


export default function page() {
  return (
    <>
    <PageHeader title="Adicionar novo Producto">
      {" "}
      Aqui voce pode Adicionar um novo Producto
    </PageHeader>

    <section className="mt-8">
      <form className="max-w-md">
        <div className="flex gap-4">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name " required />
          </div>

          <div className="form-group">
            <label htmlFor="brand">Marca/Fabricante</label>
            <input type="text" name="brand" id="brand " required />
          </div>
        </div>
        {/*  */}
        <div className="flex gap-4">
        <div className="form-group">
                <label htmlFor="category">Categoria</label>
                <select name="category" id="category" className="w-full cursor-pointer">
                  <option value="Eletronicos">Eletronicos</option>
                  <option value="Vestuario e Moda">Vestuario e Moda</option>
                  <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
                  <option value="Saude e Beleza">Saude e Beleza</option>
                  <option value="Esporte e Lazer">Esporte e Lazer</option>
                  <option value="Automotivo">Automotivo</option>
                  <option value="Brinquedos e Jogos">Brinquedos e Jogos</option>
                  <option value="Livros e Midia">Livros e Midia</option>
                  <option value="Ferramentas e Equipamentos">Ferramentas e Equipamentos</option>
                </select>
          </div>
      

       
       
          <div className="form-group">
              <label htmlFor="quantity">Quantidade</label>
              <input type="number" name="quantity" id="quantity" required />
          </div>

         
        </div>

        <div className="flex gap-4">
          <div className="form-group">
            <label htmlFor="cost">Custo de Unid(Mzn)</label>
            <input type="number" name="cost" id="cost " required />
          </div>

          <div className="form-group">
            <label htmlFor="price">Preco de Venda(Mzn)</label>
            <input type="number" name="price" id="price " required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Descricao</label>
          <textarea name="description" id="description" rows="5" className="w-full"></textarea>
        </div>
        {/* button */}

        <button className="bg-sky-500 hover:bg-sky-600 trasition-all p-2 text-whiter disabled:zinc-500 w-full">
          Criar Usuario
        </button>
      </form>
    </section>
  </>
);
}



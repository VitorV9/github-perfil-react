function App() {
  const nome = "Vitor";

  function retornaNome() {
    return`Olá ${nome}`
  }

  const pessoa = {
    nome: "Mauro"
  }

  let estaDeDia = true;

  return (
    <>
    <h1>{retornaNome()}</h1>
    <h2>React Class</h2>
    {estaDeDia ? 'Bom dia!' : 'Boa tarde!'}
    </>
  )
  
}

export default App

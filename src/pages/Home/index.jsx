import './style.css'
import Trash from '../../assets/icons8.svg'

function Home() {

  const users = [
    {
      id: 123,
      name: 'Matias',
      idade: 32,
      email: 'matias@gmail.com',
    },
    {
      id: 124,
      name: 'Manoel',
      idade: 31,
      email: 'manoel@gmail.com',
    }
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='e-mail' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (

        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.idade}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>

      ))}



    </div>

  )
}

export default Home

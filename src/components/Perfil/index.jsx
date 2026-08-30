import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome: 'Vitor da Silva Bonato',
        avatar: 'https://github.com/VitorV9.png'
    }

    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar} />
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;
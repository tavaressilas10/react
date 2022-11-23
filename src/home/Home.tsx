import React from 'react'
import './Home.css'
let nome = 'nome'

function Home() {
    return (
        <div>
            <div>
            <ul>
                <li>
                    <a href="Home.tsx">Inicio</a>
                </li>
            </ul>
            </div>

            <div>
            <p className='p'>FOTO TODO MUNDO ODEIA O CHRIS</p>
                <img src="https://www.correio24horas.com.br/fileadmin/_processed_/5/0/csm_Tyler_James_Williams_todo_mundo_odeia_chris_7fdfd4a35a.jpeg"
                    alt="" height="200" width="200"></img>
                    
            </div>

            <div className='fonte'>
                <h1>lorem</h1>
                <h2>{nome}</h2>
                <p>turma 2</p>
            </div>
        </div>
    );
}

export default Home;
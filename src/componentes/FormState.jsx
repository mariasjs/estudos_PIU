import './Form'
import { useState } from 'react'

export default function FormState(){

    const[tarefa, setTarefa] = useState('')
    const[listas, setListas] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setListas([...listas,tarefa]);
        setTarefa('');
    }
    
    const handleClear = () =>{
        setListas([])
    }
    return(
        <>
        <div>
            
            <form  onSubmit={handleSubmit}>
                <h1>Lista de Tarefas</h1>

                <div>
                    <label>
                        <span>Tarefa:</span> 
                        <input type="text" name='tarefa' onChange={(e) => setTarefa(e.target.value)} value={tarefa}  placeholder='Adicione uma tarefa aqui' />
                    </label>
                
                    <input type="submit" value="Adicionar"/>
                </div>
            </form>

            <ul>
                {listas.map((item)=> <p>{item}</p>
                )}

            </ul>
            <button onClick={handleClear}>Apagar</button>
        </div>
    
    </>
    )
}
import { useState, useEffect } from 'react'; 
// Importa os hooks useState e useEffect do React

export default function Conexao() {
// Define o componente funcional "Conexao"

    const [usuarios, setUsuarios] = useState([]);
    // Estado para armazenar todos os usuários recebidos da API

    const [id, setId] = useState(0)
    // Estado para armazenar o ID informado pelo usuário (input)

    const [count, setCount] = useState(0)
    // Estado auxiliar para forçar o useEffect a executar novamente ao clicar no botão

    const [filtrado, setFiltrado] = useState({})
    // Estado para armazenar o usuário filtrado com base no ID

    const fetchUsuarios = async () => {
        // Função assíncrona para buscar os usuários da API
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            // Faz a requisição para a API pública

            const data = await response.json(); 
            // Converte a resposta em JSON

            setUsuarios(data); 
            // Armazena os usuários no estado
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            // Exibe erro no console caso a requisição falhe
        }
    }

    useEffect(() => {fetchUsuarios()} , [count]);
    // useEffect que executa fetchUsuarios toda vez que o "count" muda
    // Isso acontece quando o botão "Resgatar Dados" é clicado

    const filtrarUsuarios = () => {
        // Função para filtrar um usuário específico com base no ID
        if (id >= 1) {
            var consulta = usuarios.filter(usuario => usuario.id == id)
            // Filtra os usuários buscando o que tem o ID correspondente
            setFiltrado(consulta[0])
            // Armazena o usuário encontrado no estado "filtrado"
        }
    }

    useEffect(() => {filtrarUsuarios()}, [id])
    // Executa a função filtrarUsuarios toda vez que o ID mudar

    return (
         <div>
            <h3>Insira um ID de 1 a 10</h3>

            <input 
                type="number" 
                value={id} 
                onChange={(e) => setId(Number(e.target.value))} 
            />
            {/* Input numérico que atualiza o estado "id" ao ser alterado */}

            {filtrado && (
                // Se "filtrado" tiver valor (não for null ou undefined), renderiza os dados do usuário
                <div>
                    <h3>Dados do Usuário de Id: {id}</h3>
                    <p>{filtrado.name}</p>
                    <p>{filtrado.username}</p>
                    <p>{filtrado.address?.city}</p> 
                    {/* Usa optional chaining para evitar erro caso "address" não exista */}

                    <button onClick={() => setCount(count + 1)}>Resgatar Dados</button>
                    {/* Botão que força a revalidação da API atualizando o "count" */}
                </div>
            )}
        </div>
    );
}

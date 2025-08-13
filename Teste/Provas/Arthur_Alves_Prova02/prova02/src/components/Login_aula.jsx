// Importa o hook useState da biblioteca React
import { useState } from "react"

// Define e exporta o componente funcional Login_aula
export default function Login_aula() {

    // Declara o estado 'nome' e sua função atualizadora 'setNome', com valor inicial ""
    const [nome, setNome] = useState("")
    
    // Declara o estado 'palavra' e sua função atualizadora 'setPalavra', com valor inicial ""
    const [palavra, setPalavra] = useState("")

    // Função chamada quando o formulário é enviado
    const handleSubmit = (e) => {
        // Evita o comportamento padrão do formulário (recarregar a página)
        e.preventDefault()

        // Array com cores que podem ser usadas para mudar o fundo da página
        const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];   

        // Verifica se a palavra-chave digitada é igual a "ProvaPIU1V"
        if (palavra == "ProvaPIU1V"){
            // Seleciona uma cor aleatória do array 'cor'
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            
            // Altera a cor de fundo do corpo da página para a cor sorteada
            document.body.style.backgroundColor = randomColor;
        }

        // Limpa os campos de entrada após o envio
        setNome("")
        setPalavra("")
    }

    // Retorna o JSX do componente, contendo um formulário com dois campos de entrada e um botão de envio
    return(
        <>
            <form onSubmit={handleSubmit}>
                {/* Campo de texto para digitar o nome */}
                <input 
                    type="text" 
                    placeholder="Digite um Nome" 
                    value={nome} 
                    onChange={(e) => (setNome(e.target.value))}
                />

                {/* Campo de texto para digitar a palavra-chave */}
                <input 
                    type="text" 
                    placeholder="Digite uma Palavra Chave" 
                    value={palavra} 
                    onChange={(e)=> (setPalavra(e.target.value))}
                />

                {/* Botão para enviar o formulário */}
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

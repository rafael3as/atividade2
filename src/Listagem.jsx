import { useState } from 'react'
import './Listagem.css'

export default function Listagem() {
    
    return (
        <>
        <main>
            <table>
            <tr>
                <td>Personagem</td>
                <td>Função</td>
                <td>País</td>
                <td>Editar</td>
                <td>Excluir</td>
            </tr>

            <tr>
                <td>Jett</td>
                <td>Duelista</td>
                <td>Coreana</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Iso</td>
                <td>Duelista</td>
                <td>Japones</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
            
            <tr>
                <td>Raze</td>
                <td>Duelista</td>
                <td>Brasileira</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Sova</td>
                <td>Inicializador</td>
                <td>Russo</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Reyna</td>
                <td>Duelista</td>
                <td>México</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

        </table>
    </main>
        </>
    )
}
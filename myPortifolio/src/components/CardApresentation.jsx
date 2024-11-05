import React from 'react'
import { useState } from 'react';

const CardApresentation = () => {

    const [isVisible, setIsVisible] = useState(false);

    // Função para exibir a descrição quando o mouse estiver sobre o card
    function showDescription() {
        setIsVisible(true);
    }

    // Função para esconder a descrição quando o mouse sai do card
    function hideDescription() {
        setIsVisible(false);
    }

    return (
        <div className='idPersonal grid grid-cols-1 bg-transparent backdrop-blur-sm  duration-300 cursor-pointer'>
            <div onMouseOver={showDescription}
                onMouseOut={hideDescription} className='bg-blue-600/20 hover:bg-blue-600/50 hover:backdrop-blur-xl duration-1000 flex items-center justify-center px-5 h-full '>
                <div className={isVisible ? 'block' : 'hidden'}>
                    <p className='font-semibold text-justify text-white text-xs duration-200'>Olá, eu sou Yuri Piaza, tenho 26 anos e sou estudante de Desenvolvimento Web, apaixonado por criar interfaces modernas e funcionais. Trabalho com HTML, CSS, JavaScript, React e Tailwind CSS, focando em transformar ideias em experiências digitais atraentes, eficientes e responsivas. Estou sempre em busca de novos desafios para evoluir minhas habilidades em frontend e entregar soluções inovadoras, priorizando a experiência do usuário.</p>
                </div>
            </div>
        </div>
    )
}

export default CardApresentation
import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";

const BtnContact = (props) => {
    function contact(){
        const phoneNumber = "5579998671726"; 
        const message = encodeURIComponent("Olá, gostaria de mais informações!");

        // Link completo para redirecionar ao WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Abre o link do WhatsApp em uma nova aba
        window.open(whatsappUrl, "_blank");
    }

    return (
        <button onClick={contact} className='font-semibold text-4xl'><FaWhatsappSquare /></button>
    )
}

export default BtnContact
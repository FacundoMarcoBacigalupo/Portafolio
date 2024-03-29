import React from 'react'
import { CohereClient } from "cohere-ai";



const Chat = () => {
    const cohere = new CohereClient({
    token: "aoR0qprU3RaZKqpipCuW9VNEYNKib7wgIS0OzXIM",
    });


    (async function () {
    const response = await cohere.classify({
        model: "embed-english-light-v2.0",
        inputs: ["experiencia"],
        examples: [{"text": "Hola\n", "label": "Me"}, {"text": "De donde sos?\n", "label": "Me"}, {"text": "Estas buscando trabajo?\n", "label": "Work"}, {"text": "En donde trabajas?\n", "label": "Work"}, {"text": "Cuales son tus tecnologias?\n", "label": "Skills"}, {"text": "Cuales son tus estudios?\n", "label": "Skills"}, {"text": "Como es tu Facebook?\n", "label": "Contact"}, {"text": "Como es tu GitHub?", "label": "Contact"}, {"text": "Como es tu linkedin?", "label": "Contact"}, {"text": "Cual es tu nombre completo?\n", "label": "Me"}, {"text": "Que horario estas disponible?\n", "label": "Contact"}, {"text": "Renumeración pretendida para un trabajo?", "label": "Work"}, {"text": "Cobras en dolares o pesos argentinos?\n", "label": "Me"}, {"text": "En que moneda cobras?", "label": "Me"}, {"text": "Cuantos años tenes?\n", "label": "Me"}, {"text": "Cual es tu preferencia de modalidad de trabajo?", "label": "Work"}, {"text": "Cuanta experiencia tenes en este rubro?\n", "label": "Me"}, {"text": "Cual es tu expectativa salarial?\n", "label": "Work"}, {"text": "Necesito solucionar algo\n", "label": "Contact"}, {"text": "Haces Sitios Webs desde 0?\n", "label": "Work"}, {"text": "Sos bueno en tu trabajo?\n", "label": "Skills"}, {"text": "De que pais sos?\n", "label": "Me"}, {"text": "Sos argentino?\n", "label": "Me"}]
    });
    console.log(`The confidence levels of the labels are ${JSON.stringify(response.classifications)}`);
    })();


    return (
        <div>
            <h1>chat</h1>
            <div>
                
            </div>
        </div>
    )
}


export default Chat
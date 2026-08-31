import { useEffect, useState } from "react";

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState("");

    //mount
    //update
    //onmount

    useEffect (() => {
        console.log ("O componente iniciou")

        return () => {
            console.log ("o componente finalizou")
        }

    }, []);

    useEffect (() => {
        console.log ("O estado nome mudou")
    }, [nome]);

    useEffect (() => {
        console.log ("Materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value
        }) 
    }

    const realizaMedia = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={({ target}) => setMateriaA(parseInt(target.value))}></input>
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}></input>
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}></input>
            {realizaMedia()}
        </form>
    )
} 

export default Formulario
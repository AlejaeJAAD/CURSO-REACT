import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
    const [scrollY, setscrollY] = useState(0);

    useEffect(() => {
        console.log('Moviendo el Scroll');

        const detectarScroll = () => setscrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        return () => {
            window.removeEventListener("scroll", detectarScroll)
            console.log('Fase de Desmontaje');
        };
    }, [scrollY])

    //Replicar componentDidUpdate , para ejecutar solo 1 vez
    //cuando se carga el componente, dejar el parametro vacio
    useEffect(() => {
        console.log('Fase de Montaje');
    }, [/*scrollY*/])

    //Como un componentDidUpdate, cada que se renderiza el componente,
    //se ejecuta todo lo que este en el useEffect
    useEffect(() => {
        console.log('Fase de Actualizacion');
    })

    useEffect(() => {
        return () => {
            console.log('Fase de Desmontaje');
        }
    })
    
    return(
        <>
            <h2>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}

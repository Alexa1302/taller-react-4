import React, { useState } from "react";

function FormularioUsuario() {
    const [nombre, setNombre] = useState("");
    const [mostrarNombre, setMostrarNombre] = useState("");

    const manejarEstado = (event) => {
        setNombre(event.target.value);
    };

    const manejarEnvio = (event) => {
        event.preventDefault();
        setMostrarNombre(nombre);
    };

    return (
        <div style={{padding: "10px"}}>
            <form onSubmit={manejarEnvio}>
                <input type="text" value={nombre} onChange={manejarEstado} placeholder="Ingresa tu Nombre"></input>
                <button type="submit">Enviar</button>
                <h1>{mostrarNombre}</h1>
            </form>
        </div>
    );
}

export default FormularioUsuario;
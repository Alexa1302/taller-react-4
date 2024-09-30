import React from "react";

function Formulario({number, setNumber}) {
    const manejarEstado = (e) => {
        setNumber(e.target.value);
    };

    return (
        <div style={{padding: "10px"}}>
            <input type="text" value={number} onChange={manejarEstado} placeholder="Ingrese un Número"></input>
        </div>
    );
}

export default Formulario;
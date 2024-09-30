//EJERCICIO 3
import React, { useState } from "react";
import Formulario from "./Ejercicio3";
import Resultado from "./Ejercicio3Resultado";

function App() {
  const [number, setNumber] = useState('');

  return (
    <div>
      <Formulario number={number} setNumber={setNumber} />
      <Resultado number={number} />
    </div>
  );
}

export default App;

//--------------------------------------------//
//EJERCICIO 2
// import React from "react";
// import FormularioUsuario from "./Ejercicio2";

// function App() {
//   return (
//     <div>
//       <FormularioUsuario/>
//     </div>
//   );
// }

// export default App;

//------------------------------------------//
//EJERCICIO 1
// import React from "react";
// import ButtonClick from "./Ejercicio1";

// function App() {
//     return (
//       <div>
//         <ButtonClick/>
//       </div>
//     );
// }

// export default App;
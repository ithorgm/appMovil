import React from "react";
import TaskManager from "./shared/TaskManager";

import Categorías from "./shared/Categorias"; // Ajusta según el nivel de carpeta

import Calendario from "./shared/Calendario"; // Importa el nuevo componente

function App() {
  return (
    <div className="">
      <TaskManager />
      <Categorías />
      <Calendario /> {/* Añade el componente Calendario */}
    </div>
  );
}

export default App;

// ModalCrearProyecto.tsx
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { projectType } from "../types.ts";
import { mostrarModalCrearProyectoSignal, proyectosSignal, proyectoCreadoSignal, proyectoIDSeleccionadoSignal } from "../signals/sharedSignals.ts";

const ModalCrearProyecto: FunctionComponent = () => {
  const [nombreProyecto, setNombreProyecto] = useState<string>("");
  const [descripcionProyecto, setDescripcionProyecto] = useState<string>("");

  const handleCreate = () => {
    const nuevoProyecto: projectType = {
      _id: Date.now().toString(),
      name: nombreProyecto,
      description: descripcionProyecto,
      films: [],
    };

    document.cookie = `project_${nuevoProyecto._id}=${
      JSON.stringify(nuevoProyecto)}; path=/;`;

    proyectosSignal.value = [...proyectosSignal.value, nuevoProyecto];
    proyectoIDSeleccionadoSignal.value = nuevoProyecto._id;
    setNombreProyecto("");
    setDescripcionProyecto("");
    proyectoCreadoSignal.value = true;
    mostrarModalCrearProyectoSignal.value = false;
  };

  return (
    <div class="modal" style={{ display: mostrarModalCrearProyectoSignal.value ? "block" : "none" }}>
      <div class="modal-content">
        <span
          class="close"
          onClick={() => {
            mostrarModalCrearProyectoSignal.value = false;
            setNombreProyecto("");
            setDescripcionProyecto("");
          }}
        >
          x
        </span>
        <h3>Crear Nuevo Proyecto</h3>
        <p>Introduce el nombre y la descripcion del proyecto</p>
        <input className="inputM"
          type="text"
          value={nombreProyecto}
          onBlur={(e) => setNombreProyecto(e.currentTarget.value)}
          placeholder="Nombre del proyecto"
        />
        <textarea className="textareaM"
          value={descripcionProyecto}
          onBlur={(e) => setDescripcionProyecto(e.currentTarget.value)}
          placeholder="Descripcion del proyecto"
        ></textarea>
        <button class="modal-btn" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default ModalCrearProyecto;

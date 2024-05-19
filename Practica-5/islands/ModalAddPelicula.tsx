// ModalAddPelicula.tsx
import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { FilmType, projectType } from "../types.ts";
import ModalCrearProyecto from "./ModalCrearProyecto.tsx";
import { mostrarModalCrearProyectoSignal, proyectosSignal, proyectoCreadoSignal, proyectoIDSeleccionadoSignal } from "../signals/sharedSignals.ts";

type Props = {
  film: FilmType;
};

const ModalAddPelicula: FunctionComponent<Props> = ({ film }: Props) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [peliculaAñadida, setPeliculaAñadida] = useState<boolean>(false);
  const [contadorPeliculasAñadidas, setContadorPeliculasAñadidas] = useState<number>(0);

  //Esto se encarga de extraer los proyectos de las cookies y guardarlos en proyectosSignal
  useEffect(() => {
    const projectsLoaded: projectType[] = [];
    document.cookie.split("; ").forEach((cookie) => {
      if (cookie.startsWith("project_")) {
        projectsLoaded.push(JSON.parse(cookie.split("=")[1]));
        console.log(projectsLoaded);
      }
    });
    proyectosSignal.value = projectsLoaded;
  }, []);

  //Esto hace que el proyecto seleccionado sea el último creado
  useEffect(() => {
    if (proyectoCreadoSignal.value === true) {
      proyectoIDSeleccionadoSignal.value = proyectosSignal.value[proyectosSignal.value.length - 1]._id;
      proyectoCreadoSignal.value = false;
    }
  }, [proyectoCreadoSignal.value]);



  const onAddFilmToProject = (projectID: string, film: FilmType) => {

    
    if (!projectID) return;
      
    const updatedProjects = proyectosSignal.value.map((proj: projectType) => {
        // Comprobar si este es el proyecto que necesita ser actualizado
        if (proj._id === projectID) {
          // Encontrar la película en el proyecto si ya existe
          let existingFilmIndex = -1;
          for (let i = 0; i < proj.films.length; i++) {
            if (proj.films[i].film._id === film._id) {
              existingFilmIndex = i;
              break;
            }
          }
      console.log("añadiendo película a proyecto");
          // Si la película ya existe, incrementar la cantidad
          if (existingFilmIndex !== -1) {
            proj.films[existingFilmIndex].quantity += 1;
          } else {
            // Si la película no existe, agregarla con cantidad 1
            proj.films.push({ film: film, quantity: 1 });
          }
      
          // Actualizar la cookie con la información del proyecto
          document.cookie = `project_${proj._id}=${JSON.stringify(proj)}; path=/;`;
        }
      
        // Devolver el proyecto (actualizado o no modificado)
        return proj;
      });
      
    setPeliculaAñadida(true);
    setContadorPeliculasAñadidas(contadorPeliculasAñadidas + 1);
    proyectosSignal.value = updatedProjects;
  };




  return (
    <>
      <div class="ButtonAdd">
        <button class="ButtonAdd" onClick={() => setMostrarModal(true)}>+</button>
      </div>

      <div class="modal" style={{ display: mostrarModal ? "block" : "none" }}>
        <div class="modal-content">
          <span
            class="close"
            onClick={() => {
              setMostrarModal(false);
              window.location.reload();
            }}
          >
            x
          </span>

          <div class="cont-modal-add-and-create">
            <div class="cont-modal-add-film">
              <h3>Añadir pelicula a proyecto</h3>
              {proyectosSignal.value.length > 0 ? (
                <div>

                  <p>Add <b>{film.name}</b> to: </p>

                  <select
                    className="selectM"
                    onChange={(e) => proyectoIDSeleccionadoSignal.value = e.currentTarget.value}
                    value={proyectoIDSeleccionadoSignal.value}
                  >
                    {proyectosSignal.value.map((proj) => (
                      <option key={proj._id} value={proj._id}>
                        {proj.name}
                      </option>
                    ))}

                  </select>


                  <button
                    class="modal-btn"
                    onClick={() => onAddFilmToProject(proyectoIDSeleccionadoSignal.value, film)}
                  >Añadir pelicula</button>
                    
                  {console.log(peliculaAñadida)}
                  {peliculaAñadida && (
                    <p>
                      <b>{contadorPeliculasAñadidas}</b>{" "}
                      pelicula añadida al proyecto.
                    </p>
                  )}
                </div>
              ) : <p>No se han encontrado proyectos, crea uno nuevo.</p>}
            </div>


            <div class="cont-modal-create-project">
              <h3>Crear nuevo proyecto</h3>
              <button
                class="modal-btn"
                onClick={() => mostrarModalCrearProyectoSignal.value = true}
              >
                Crear
              </button>
            </div>


          </div>
        </div>

        {mostrarModalCrearProyectoSignal.value && <ModalCrearProyecto />}
      </div>
    </>
  );
};

export default ModalAddPelicula;

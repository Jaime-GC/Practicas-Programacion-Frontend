import { FunctionComponent } from "preact";
import { FilmType, project } from "../types.ts";
import { useEffect, useState } from "preact/hooks";

type Props = {
    film: FilmType;
};

const ModalAddPelicula: FunctionComponent<Props> = ({ film }: Props) => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalCrearProyecto, setMostrarModalCrearProyecto] = useState(false);

    const [proyectos, setProyectos] = useState<project[]>([]);
    const [nombreProyecto, setNombreProyecto] = useState<string>("");
    const [descripcionProyecto, setDescripcionProyecto] = useState<string>("");
    const [projectIDSeleccionado, setProjectIDSeleccionado] = useState<string>("");
    const [proyectoCreado, setProyectoCreado] = useState<boolean>(false);

    const [peliculaAñadida, setPeliculaAñadida] = useState<boolean>(false);

    useEffect(() => {
        const projectsLoaded: project[] = [];
        document.cookie.split("; ").forEach((cookie) => {
          if (cookie.startsWith("project_")) {
            projectsLoaded.push(JSON.parse(cookie.split("=")[1]));
            console.log(projectsLoaded);
          }
        });
        setProyectos(projectsLoaded);
    }, []);





    const handleCreate = () => {
        const newProject: project = {
          _id: Date.now().toString(),
          name: nombreProyecto,
          description: descripcionProyecto,
          films: [],
        };
        document.cookie = `project_${newProject._id}=${
          JSON.stringify(newProject)
        }; path=/;`;

        
        setProyectos([...proyectos, newProject]);
        setProjectIDSeleccionado(newProject._id);
        setNombreProyecto("");
        setDescripcionProyecto("");
        setProyectoCreado(true);
        setMostrarModalCrearProyecto(false);
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
                    }}>x</span>


                    <div class="cont-modal-add-and-create">

                        <div class="cont-modal-add-film">
                            <h3>Añadir pelicula a proyecto</h3>
                            {proyectos.length > 0 ? (
                            
                                <div>
                                    <p>Add <strong>{film.name}</strong> to: </p>
                                
                                <select className="selectM"
                                    onChange={(e) =>
                                    setProjectIDSeleccionado(e.currentTarget.value)}
                                    value={projectIDSeleccionado}
                                >

                                    {proyectos.map((proj) => (
                                    <option key={proj._id} value={proj._id}>
                                        {proj.name}
                                    </option>
                                    ))}

                                </select>

                                
                                <button
                                    class="modal-btn"
                                    onClick={() => onAddFilmToProject(projectIDSeleccionado, film)}
                                >
                                    Add Film
                                </button>

                                {peliculaAñadida && (
                                    <p>
                                    <strong>{countAddedFilm}</strong>{" "}
                                    film added to project.
                                    </p>
                                )}
                                </div>
                            )
                            : <p>No se han encontrado proyectos, crea uno nuevo.</p>}
                        </div>


                        <div class="cont-modal-create-project">
                            <h3>Crear nuevo proyecto</h3>

                            <button
                                class="modal-btn"
                                onClick={() => setMostrarModalCrearProyecto(true)}
                            > Crear </button>
                                
                        </div>
                    
                    </div>
                </div>

            
                <div class="modal" style={{ display: mostrarModalCrearProyecto ? "block" : "none" }}>
                    <div class="modal-content">
                        <span 
                        class="close" 
                        onClick={() => {
                            setMostrarModalCrearProyecto(false);
                            setNombreProyecto("");
                            setDescripcionProyecto("");
                        }}>x</span>

                        <h3>Crear Nuevo Proyecto</h3>
                        <p>Introduce el nombre y la descripcion del proyecto</p>

                        <input className="inputM"
                        type="text"
                        value={nombreProyecto}
                        onBlur={(e)=> setNombreProyecto(e.currentTarget.value)}
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


            </div>




        </>
    );
};

export default ModalAddPelicula;

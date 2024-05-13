import { FunctionComponent } from "preact";
import { project } from "../types.ts";
import ModalSelectProyecto from "../islands/ModalSelectProyecto.tsx";

type Data = {
  projects: project[];
  dinamicPage: boolean;
};

const Projects: FunctionComponent<Data> = ({ projects, dinamicPage }: Data) => {
  return (
    <div>
      {!dinamicPage
        ? (
          <div>
            <h1>Proyectos</h1>
            <p>
              Aquí puedes ver los proyectos creados.
            </p>
            <ModalSelectProyecto projects={projects} />
          </div>
        )
        : <h1>Proyectos</h1>}
      <div className="contenido_pagina_proyecto">



          {projects.length > 0
            ? (
              <div className="contenido_proyecto">
                
                {projects.map((project: project) => (
                  <div className="project" key={project._id}>
                    
                    <div className="">
                      <h3>{project.name}</h3>
                      <ModalDeleteProyecto
                        projectID={project._id}
                        projects={projects}
                      />
                    </div>

                    <p>{project.description}</p>
                    <p>Numero de peliculas: {project.films.length}</p>

                    <div className="contenido_peliculas">
                      {project.films.map((film) => (

                        <div className="cont-project-film-modal">
                          <Film film={film.film} />
                          <p>Quantity: {film.quantity}</p>
                          
                          <ModalDeletePelicula
                            filmID={film.film._id}
                            projectID={project._id}
                            projects={projects}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
            : <h1>No hay proyectos</h1>
          }



      </div>
    </div>
  );
};

export default Projects;
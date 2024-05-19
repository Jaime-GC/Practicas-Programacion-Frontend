import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { project } from "../types.ts";

type Data = {
  projects: project[];
};

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Data>) {
    const cookies = getCookies(_req.headers);
    const projects: project[] = [];
    Object.keys(cookies).forEach((key) => {
      if (key.startsWith("project_")) {
        try {
          const projectData = JSON.parse(cookies[key]);
          projects.push(projectData);
        } catch (e) {
          console.error("Failed to parse project data from cookie:", key, e);
        }
      }
    });

    if (projects.length === 0) {
      return await ctx.render({ projects: [] });
    }
    return await ctx.render({ projects });
  },
};

const ProjectsHomePage = (props: PageProps<Data>) => {
  const projects = props.data.projects;

  return (
    <div className="projects-container">
      <h1>Proyectos</h1>
      {projects.length === 0 ? (
        <p style={{ color: "white" }} >No hay proyectos disponibles.</p>
      ) : (
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project._id} className="project-item">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <ul className="films-list">
                {project.films.map((filmItem) => (
                  <li key={filmItem.film._id} className="film-item">
                    <img src={filmItem.film.staticImageUrl} alt={filmItem.film.name} className="film-image" />
                    <div className="film-details">
                      <h3>{filmItem.film.name}</h3>
                      <p>Marca: {filmItem.film.brand}</p>
                      <p>ISO: {filmItem.film.iso}</p>
                      <p>Cantidad: {filmItem.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsHomePage;
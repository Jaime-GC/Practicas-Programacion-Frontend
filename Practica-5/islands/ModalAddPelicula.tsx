import { FunctionComponent } from "preact";
import { FilmType, project } from "../types.ts";
import { useEffect, useState } from "preact/hooks";

type Props = {
  film: FilmType;
};

const ModalAddPelicula: FunctionComponent<Props> = ({ film }) => {
  const [projects, setProjects] = useState<project[]>([]);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectID, setSelectedProjectID] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [addedFilm, setAddedFilm] = useState<boolean>(false);
  const [countAddedFilm, setCountAddedFilm] = useState<number>(0);
  const [createdProject, setCreatedProject] = useState<boolean>(false);

  useEffect(() => {
    const projectsLoaded: project[] = [];
    document.cookie.split("; ").forEach((cookie) => {
      if (cookie.startsWith("project_")) {
        projectsLoaded.push(JSON.parse(cookie.split("=")[1]));
      }
    });
    setProjects(projectsLoaded);
  }, []);

  useEffect(() => {
    if (createdProject) {
      setSelectedProjectID(projects[projects.length - 1]._id);
      setCreatedProject(false);
    }
  }, [createdProject]);

  useEffect(() => {
    setCountAddedFilm(0);
    setAddedFilm(false);
  }, [selectedProjectID]);

  const onAddFilmToProject = (projectID: string, film: film) => {
    if (!projectID) {
      return;
    }
    const updatedProjects = projects.map((proj) => {
      if (proj._id === projectID) {
        const existingFilmIndex = proj.films.findIndex((f) =>
          f.film._id === film._id
        );
        if (existingFilmIndex !== -1) {
          proj.films[existingFilmIndex].quantity += 1;
        } else {
          proj.films.push({ film, quantity: 1 });
        }
        document.cookie = `project_${proj._id}=${
          JSON.stringify(proj)
        }; path=/;`;
      }
      return proj;
    });
    setAddedFilm(true);
    setCountAddedFilm(countAddedFilm + 1);
    setProjects(updatedProjects);
  };

  const handleCreate = () => {
    const newProject: project = {
      _id: Date.now().toString(),
      name: projectName,
      description: projectDescription,
      films: [],
    };
    document.cookie = `project_${newProject._id}=${
      JSON.stringify(newProject)
    }; path=/;`;
    setProjects([...projects, newProject]);
    setSelectedProjectID(newProject._id);
    setProjectName("");
    setProjectDescription("");
    setCreatedProject(true);
    setShowCreateProjectModal(false);
  };

  return (
    <>
      <div class="ButtonAdd">
        <span class="add" onClick={() => setShowModal(true)}>+</span>
      </div>
      {showModal && (
        <div class="modal">
          <div class="modal-content">
            <span
              class="close"
              onClick={() => {
                setShowModal(false);
                window.location.reload();
              }}
            >
              &times;
            </span>
            <div class="cont-modal-add-and-create">
              <div class="cont-modal-add-film">
                <h3>Add Film to Project</h3>
                {projects.length > 0
                  ? (
                    <div>
                      <p>
                        Add <strong>{film.name}</strong> to:
                      </p>
                      <select
                        onChange={(e) =>
                          setSelectedProjectID(e.currentTarget.value)}
                        value={selectedProjectID}
                      >
                        {projects.map((proj) => (
                          <option key={proj._id} value={proj._id}>
                            {proj.name}
                          </option>
                        ))}
                      </select>
                      <button
                        class="modal-btn"
                        onClick={() => onAddFilmToProject(selectedProjectID, film)}
                      >
                        Add Film
                      </button>
                      {addedFilm && (
                        <p>
                          <strong>{countAddedFilm}</strong>{" "}
                          film added to project.
                        </p>
                      )}
                    </div>
                  )
                  : <p>No projects found. Create a new one.</p>}
              </div>
              <div class="cont-modal-create-project">
                <h3>Create New Project</h3>
                <button
                  class="modal-btn"
                  onClick={() => setShowCreateProjectModal(true)}
                >
                  Create Project
                </button>
              </div>
            </div>
          </div>
          {showCreateProjectModal && (
            <div class="modal">
              <div class="modal-content">
                <span
                  class="close"
                  onClick={() => {
                    setProjectName("");
                    setProjectDescription("");
                    setShowCreateProjectModal(false);
                  }}
                >
                  &times;
                </span>
                <h3>Create New Project</h3>
                <p>Enter the project name and description:</p>
                <input
                  type="text"
                  value={projectName}
                  onBlur={(e) => setProjectName(e.currentTarget.value)}
                  placeholder="Project Name"
                />
                <textarea
                  value={projectDescription}
                  onBlur={(e) => setProjectDescription(e.currentTarget.value)}
                  placeholder="Project Description"
                >
                </textarea>
                <button class="modal-btn" onClick={handleCreate}>
                  Create Project
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ModalAddPelicula;
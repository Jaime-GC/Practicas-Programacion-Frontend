import { FunctionComponent } from "preact";
import { project } from "../types.ts";
import { useState } from "preact/hooks";

type Props = {
  filmID: string;
  projectID: string;
  projects: project[];
};

// Modal to delete a film from a project and modify the project's cookie
const ModalDeletePelicula: FunctionComponent<Props> = (
  { filmID, projects, projectID },
) => {
  const [showModal, setShowModal] = useState(false);
  const onDeleteFilmFromProject = () => {
    // Return only the project without the film to delete
    const updatedProject = projects.map((proj) => {
      // if quantity is greater than 1, decrement quantity
      const filmIndex = proj.films.findIndex((f) => f.film._id === filmID);
      if (proj._id === projectID && proj.films[filmIndex].quantity > 1) {
        proj.films[filmIndex].quantity -= 1;
      } else {
        proj.films = proj.films.filter((f) => f.film._id !== filmID);
      }
      return proj;
    });
    document.cookie = `project_${projectID}=${JSON.stringify(updatedProject[0])}; path=/;`;
    window.location.href = "/projects";
    setShowModal(false);
  };

  return (
    <>
      <div class="ButtonDelete">
        <span class="delete" onClick={() => setShowModal(true)}>-</span>
      </div>
      {showModal && (
        <div class="modal">
          <div class="modal-content">
            <span class="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h3>Delete Film</h3>
            <p>Are you sure you want to delete this film from the project?</p>
            <button class="btn-delete modal-btn" onClick={onDeleteFilmFromProject}>
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDeletePelicula;
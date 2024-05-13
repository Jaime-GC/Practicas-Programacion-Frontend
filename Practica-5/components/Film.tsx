import { FunctionComponent } from "preact";
import { FilmType } from "../types.ts";
import ModalAddPelicula from "../islands/ModalAddPelicula.tsx";


const Film: FunctionComponent<FilmType> = (props) => {
  const { _id, name, brand, photo, film } = props;

  return (
    <div>

      <a href={"/film_info/" + _id}> 
      
        <div class="">
        
          <h2 class="text-overflow">{name}</h2>
          <h2 class="text-overflow">{brand}</h2>

          <img class="img-m rounded" src={photo} />          
          <p></p>

        </div>
      </a>
         
        <ModalAddPelicula film={film} />

        

      

    </div>
  );
};

export default Film;

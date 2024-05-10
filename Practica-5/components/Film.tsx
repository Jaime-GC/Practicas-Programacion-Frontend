import { FunctionComponent } from "preact";
import { FilmType } from "../types.ts";


const Film: FunctionComponent<FilmType> = (props) => {
  const { name, brand, photo } = props;

  return (
    <div>

      <a class="but" href={"/lover_info/" + name}> 
      
        <div class="characterContainer">
        
        <h2 class="text-overflow">{name}</h2>
        <h2 class="text-overflow">{brand}</h2>

        <img class="img-m rounded" src={photo} />          
        <p>
        </p>

        </div>

      </a> 

    </div>
  );
};

export default Film;

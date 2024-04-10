import { FunctionComponent } from "preact";
import { HeroeType } from "../types.ts";


const Heroe: FunctionComponent<HeroeType> = (props) => {
  const { name, image, sound } = props;
  return (
    <div>
      

      <a href={"/heroe_info/" + name}> 

        <div class="characterContainer">

        <h2 class="text-overflow">{name}</h2>
        <img class="img-m half-rounded" src={image} />
        <audio controls> <source src={sound} type="audio/mpeg"/> Tu navegador no soporta el elemento de audio. </audio>
          
        <p>
        </p>

        </div>

      </a>
      

    </div>
  );
};

export default Heroe;

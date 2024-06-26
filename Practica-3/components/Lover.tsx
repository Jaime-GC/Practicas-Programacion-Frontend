import { FunctionComponent } from "preact";
import { LoverType } from "../types.ts";
import { comment } from "../types.ts";


const Lover: FunctionComponent<LoverType> = (props) => {
  const { name, photo } = props;

  return (
    <div>

      <a class="but" href={"/lover_info/" + name}> 
      
        <div class="characterContainer">

        <h2 class="text-overflow">{name}</h2>
        <img class="img-m rounded" src={photo} />          
        <p>
        </p>

        </div>

      </a> 

    </div>
  );
};

export default Lover;

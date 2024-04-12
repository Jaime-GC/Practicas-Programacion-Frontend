import { FunctionComponent } from "preact";
import { LoverType } from "../types.ts";
import { comment } from "../types.ts";


const Lover: FunctionComponent<LoverType> = (props) => {
  const { name, photo } = props;

  return (
    <div>
      
        <div class="characterContainer">

        <h2 class="text-overflow">{name}</h2>
        <img class="img-m rounded" src={photo} />          
        <p>
        </p>

        </div>

      

    </div>
  );
};

export default Lover;

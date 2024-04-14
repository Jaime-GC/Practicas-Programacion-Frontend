import { FunctionComponent } from "preact";
import { LoverType } from "../types.ts";
import { comment } from "../types.ts";


const Lover2: FunctionComponent<LoverType> = (props) => {
  const { name, age, sex, hobbies, photo } = props;

  return (
    <div>

        <a class="but" href={"/lover_info/" + name}> 

      
        <div class="characterContainer">

        <h2 class="text-overflow">{name}</h2>
        <img class="img-m rounded" src={photo} />          
        <p class="letra">Age: {age}</p>
        <p class="letra">Sex: {sex}</p>
        <p class="letra">Hobbies: {hobbies.join(", ")}</p>

        </div>

      </a> 

    </div>
  );
};

export default Lover2;

import axios from "npm:axios";
import Lover from "../components/Lover.tsx";
import { LoverType } from "../types.ts";
import { comment } from "../types.ts";



export default async function Home() {

    const response = await axios.get<LoverType[]>(
      "https://lovers.deno.dev/",
    );

    const lovers:Lover[] = response.data;
    return (
      <div>

        <div class="flex-column">
          <h1 class="mainTitle">Lovers App</h1>
            <div class="flex-row flex-around">
     
                {lovers && lovers.map((lover) => (
                  <Lover
                    name={lover.name}
                    photo={lover.photo}
                  />
                ))}

            </div>
        </div>

       
      </div>
    );

}

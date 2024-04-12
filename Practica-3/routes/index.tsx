import axios from "npm:axios";
import Lover from "../components/Lover.tsx";
import { LoverType } from "../types.ts";
import { comment } from "../types.ts";
import FilteredProfilesPage from "../islands/FilteredProfilesPage.tsx";



export default async function Home() {

    const response = await axios.get<LoverType[]>(
      "https://lovers.deno.dev/",
    );

    const lovers:Lover[] = response.data;
    return (
      <>
      <div>hola

        <FilteredProfilesPage />
      </div>





        <div class="flex-column">
          <h1 class="mainTitle">Lovers</h1>
            <div class="flex-row flex-around">
     
                {lovers && lovers.map((lover) => (
                  <Lover
                    name={lover.name}
                    photo={lover.photo}
                  />
                ))}

            </div>
        </div>


      </>
    );

}

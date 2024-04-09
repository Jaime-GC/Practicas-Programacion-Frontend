import axios from "npm:axios";
import Heroe from "../components/Heroe.tsx";
import { HeroeType } from "../types.ts";


export default async function Home() {

    const response = await axios.get<HeroeType[]>(
      "https://supermondongo.deno.dev/",
    );

    const heroes:HeroeType[] = response.data;
    return (
      <>

          {heroes && heroes.map((heroe) => (
            <Heroe
              name={heroe.name}
              image={heroe.image}
              sound={heroe.sound}
            />
          ))}
      </>
    );

}

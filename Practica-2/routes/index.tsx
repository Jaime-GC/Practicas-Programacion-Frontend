import axios from "npm:axios";
import Heroe from "../islands/Heroe.tsx";
type Heroe = {
  name: string;
  image: string;
  sound: string;
};


export default async function Home() {

    const response = await axios.get<Heroe[]>(
      "https://supermondongo.deno.dev/",
    );

    const heroes:Heroe[] = response.data;
    return (
      <div class="flex-column">
        <h1 class="mainTitle">Heroes</h1>
        <div class="flex-row flex-around">
          {heroes && heroes.map((char) => (
            <Heroe
              name={char.name}
              image={char.image}
              sound={char.sound}
            />
          ))}
        </div>
      </div>
    );

}

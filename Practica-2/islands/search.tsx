import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import Heroe from "./Heroe.tsx";
import axios from "npm:axios";

type Heroe = {
    name: string;
    image: string;
    sound: string;
  };


const HeroeSearch: FunctionalComponent = () => {
  const [name, setName] = useState<string>("");
  const [heroes, setHeroes] = useState<Heroe[]>([]);

  const searchHeroes = async (searchText: string): Promise<void> => {
    const url = `https://supermondongo.deno.dev/${searchText}`;
    try {
      const response = await axios.get<Heroe>(url);
      setHeroes(response.data);
    } catch (error) {
      console.error("Error fetching heroes:", error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nombre del héroe"
          value={name}
          onInput={(e) => {
            setName(e.currentTarget.value);
            searchHeroes(e.currentTarget.value);
          }}
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            searchHeroes(name);
          }}
        >
          Buscar
        </button>
      </form>
      {heroes.length > 0 && heroes.map((char) => (
            <Heroe
              name={char.name}
              image={char.image}
              sound={char.sound}
            />
          ))}
    </div>
  );
};

export default HeroeSearch;

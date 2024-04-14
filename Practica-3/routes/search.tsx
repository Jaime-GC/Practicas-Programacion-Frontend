import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { LoverType } from "../types.ts";
import Lover2 from "../components/Lover2.tsx";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, LoverType[]>) => {
    try {
      const response = await Axios.get<LoverType[]>("https://lovers.deno.dev/");
      let loversData = response.data;

      const url = new URL(req.url);
      const name = url.searchParams.get("name") || undefined;
      const sex = url.searchParams.get("sex") || undefined;
      const age = url.searchParams.get("age") || undefined;
      const hobbies = url.searchParams.get("hobbies") || undefined;

      if (name !== undefined) {
        loversData = loversData.filter((lover) => lover.name.toLowerCase().includes(name.toLowerCase()));
      }

      if (sex !== undefined) {
        loversData = loversData.filter((lover) => lover.sex.toLowerCase() === sex.toLowerCase());
      }

      if (age !== undefined) {
        loversData = loversData.filter((lover) => lover.age === parseInt(age));
      }

      if (hobbies !== undefined) {
        loversData = loversData.filter((lover) => lover.hobbies.includes(hobbies)); 
      }

      return ctx.render(loversData); // Renderizar la página con los amantes filtrados
    } catch (error) {
      console.error("Error fetching lovers data:", error);
      return ctx.render([]); // Enviar una lista vacía en caso de error
    }
  }
};

const Page = (props: PageProps<LoverType[]>) => {
  const filteredLovers = props.data;


  return (
    <div>
      <h1 class="mainTitle">Buscador de Lovers</h1>

      <form class="form" method="get">
        <h2>Introduce los filtros</h2>
        
        <label>
          Filter by Name:
          <input type="text" name="name" defaultValue="" />
        </label>

        <label>
          Filter by Sex:
          <select name="sex">
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label>
          Filter by Age:
          <input type="number" name="age" min="0" defaultValue="" />
        </label>

        <label>
          Filter by Hobbies:
          <input type="text" name="hobbies" defaultValue="" />
        </label>

        <div class="botones">
          <button class="button" type="submit">Enviar</button>
          <a class="a" type="button" href = "/search">Reset</a>
        </div>
      </form>

      {/* Mostrar perfiles filtrados */}
      <div class="flex-row flex-around">
        {filteredLovers.length > 0 ? (
          filteredLovers.map((lover) => (
            <div key={lover.name}>
              <Lover2 name={lover.name} photo={lover.photo} age={lover.age}  sex={lover.sex} hobbies={lover.hobbies}/>
              
              
            </div>
          ))
        ) : (
          <p>No se encontraron lovers filtrados.</p>
        )}
      </div>
    </div>
  );
};

export default Page;

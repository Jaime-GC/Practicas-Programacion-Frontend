import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Film from "../components/Film.tsx";
import { FilmType } from "../types.ts";
import { filterPropertyJSON } from "../filter.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, FilmType[]>) => {
    try {
      const response = await Axios.get<FilmType[]>("https://filmapi.vercel.app/api/films");
      let filmsData:FilmType[] = response.data;

      const url = new URL(req.url);
      const name = url.searchParams.get("name") || undefined;
      const brand = url.searchParams.get("brand") || undefined;
      const color = url.searchParams.get("color") || undefined;
      const FormatThirtyFive = url.searchParams.get("FormatThirtyFive") || undefined;
      const FormatOneTwenty = url.searchParams.get("FormatOneTwenty") || undefined;
      const iso = url.searchParams.get("iso") || undefined;

      const brands: string[] = filterPropertyJSON(response.data, "brand");
      //console.log(brands);

      const isos: string[] = filterPropertyJSON(response.data, "iso");
      //console.log(isos);



      if (name !== undefined) {
        filmsData = filmsData.filter((film) => film.name.toLowerCase().includes(name.toLowerCase()));
      }

      if (brand !== undefined) {
        filmsData = filmsData.filter((film) => film.brand.toLowerCase() === brand.toLowerCase());
      }

      if (iso !== undefined) {
        filmsData = filmsData.filter((film) => film.iso === Number(iso));
      }

      if (color !== undefined) {
        const isColor = color === "true" ? true : false;
        filmsData = filmsData.filter((film) => film.color === isColor);
      }

      if (FormatThirtyFive !== undefined) {
        const isFormatThirtyFive = FormatThirtyFive === "true" ? true : false;
        filmsData = filmsData.filter((film) => film.formatThirtyFive === isFormatThirtyFive);
      }

      if (FormatOneTwenty !== undefined) {
        const isFormatOneTwenty = FormatOneTwenty === "true" ? true : false;
        filmsData = filmsData.filter((film) => film.formatOneTwenty === isFormatOneTwenty);
      }  

      return ctx.render({filmsData: filmsData, brands: brands, isos:isos}); // Renderizar la página con los amantes filtrados
    } catch (error) {
      console.error("Error fetching films data:", error);
      return ctx.render([]); // Enviar una lista vacía en caso de error
    }
  }
};

const Page = (props: PageProps<FilmType[]>) => {

  const brands = props.data.brands;
  const isos = props.data.isos;
  const filteredFilms = props.data.filmsData;
  return (
    <div>
      <h1 class="mainTitle">Buscador de Films</h1>

      <form class="form" method="get">
        <h2>Introduce los filtros</h2>
        
        <label>
          Nombre:
          <input type="text" name="name" defaultValue="" />
        </label>

        <label>
          Brand:
          <select name="brand">
            <option value="">All</option>
            {brands.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
            ))}
          </select>
        </label>

        <label>
          ISO:
          <select name="iso">
            <option value="">All</option>
            {isos.map((iso, index) => (
            <option key={index} value={iso}>{iso}</option>
            ))}
          </select>
        </label>

        <label>
          Color:
          <select name="color">
            <option value="">All</option>
            <option value="true">Color</option>
            <option value="false">Black and White</option>
          </select>
        </label>

        <label>
         FormatThirtyFive:
          <select name="FormatThirtyFive">
            <option value="">All</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </label>

        <label>
         FormatOneTwenty:
          <select name="FormatOneTwenty">
            <option value="">All</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </label>      

        <div class="botones">
          <button class="button" type="submit">Enviar</button>
          <a class="a" type="button" href = "/search">Reset</a>
        </div>
      </form>

      {/* Mostrar perfiles filtrados */}
      <div class="flex-row flex-around">
        {filteredFilms.length > 0 ? (
          filteredFilms.map((film) => (
            <Film name= {film.name} brand={film.brand} photo={film.staticImageUrl} />
          ))
        ) : (
          <p>No se encontraron films filtrados.</p>
        )}
      </div>
    </div>
  );
};

export default Page;

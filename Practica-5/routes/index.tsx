import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { FilmType } from "../types.ts";
import SearchFilm from "../islands/SearchFilm.tsx";
import { filterPropertyJSON } from "../filter.ts";


export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, { films: FilmType[], brands: string[], isos: string[] }>) => {
    try {
      const response = await Axios.get<FilmType[]>("https://filmapi.vercel.app/api/films");
      const filmsData: FilmType[] = response.data;

      const brands: string[] = filterPropertyJSON(response.data, "brand");
      const isos: string[] = filterPropertyJSON(response.data, "iso");

      return ctx.render({ films: filmsData, brands, isos });
    } catch (error) {
      console.error("Error fetching films data:", error);
      return ctx.render({ films: [], brands: [], isos: [] });
    }
  }
};

const Page = (props: PageProps<{ films: FilmType[], brands: string[], isos: string[] }>) => {
  return (
    <SearchFilm
      initialFilms={props.data.films}
      initialBrands={props.data.brands}
      initialIsos={props.data.isos}
    />
  );
};

export default Page;
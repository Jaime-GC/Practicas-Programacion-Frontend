import { Handlers, FreshContext, PageProps  } from "$fresh/server.ts";
import Axios from "npm:axios";
import { FilmType } from "../../types.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, { film: FilmType }>) => {
    const { id } = ctx.params;
    try {
      const response = await Axios.get<FilmType[]>(`https://filmapi.vercel.app/api/films/`);
      const films:FilmType[] = response.data;
      const film = films.find((film) => film._id === id);
      return ctx.render(film);
    } catch (error) {
      console.error("Error fetching film data:", error);
      return ctx.render(null);
    }
  },
};

const Page = (props: PageProps<FilmType | null>) => {
  const filmData = props.data;

  if (!filmData) {
    return <div>Film not found</div>;
  }

  const { name, brand, iso, formatThirtyFive, formatOneTwenty, color, process, staticImageUrl, description, customDescription, keyFeatures } = filmData;

return (
    <>

        <div class="info">
            <h2>Film Information</h2>
            <h3>Name: {name}</h3>
            <h3>Brand: {brand}</h3>
            <h3>ISO: {iso}</h3>
            <h3>Format 35mm: {formatThirtyFive ? "Yes" : "No"}</h3>
            <h3>Format 120: {formatOneTwenty ? "Yes" : "No"}</h3>
            <h3>Color: {color ? "Color" : "Black and White"}</h3>
            <h3>Process: {process}</h3>
            
            <h3>Description: <p></p>{description}</h3>
            <img className="foto" src={staticImageUrl} alt={name} />
            {keyFeatures && keyFeatures.length > 0 && (
                <>
                    <h3 class="features">Key Features:
                    <ul>
                        {keyFeatures.map((feature) => (
                            <li key={feature._id}>{feature.feature}</li>
                        ))}
                    </ul></h3>
                </>
            )}

            
            <a href="/">Volver a Inicio</a>

        </div>

    </>
);
};

export default Page;
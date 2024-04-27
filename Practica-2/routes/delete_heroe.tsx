import Heroe from "../components/Heroe.tsx";
import { HeroeType } from "../types.ts";
import Axios, { AxiosError } from "npm:axios"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";




export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, HeroeType>) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("name") || undefined;
        const creator = url.searchParams.get("creator") || undefined;

        console.log("nombre", name,  "creator", creator);
        
        if (name !== undefined && creator !== undefined) {
            const url = `https://supermondongo.deno.dev/${name}`;
            const response = await Axios.get(url);
            if (response.status === 200) {
                console.log("El heroe ya existe");
                console.log("nombre", name,  "creator", creator);
                await fetch(url, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ creator: creator }),
                  });

                return ctx.render(response.data);
            } else if(response.status === 404 || response.status === 400) {
                return ctx.render({ name: "Error", image: "", sound: "", creator: "Hero not found" });
            }
        } else {
            return ctx.render({ name: "", image: "", sound: "", creator: "" });
        }
            
    } 
};

const Page = (props: PageProps<HeroeType>) => {

    const heroe = props.data;

    
    return (


    <div>


          <><form class="form" method="get">
            <h1>Borrar heroe</h1>
              <input type="text" placeholder="Name" name="name" value={""} />
              <input type="text" placeholder="Creator" name="creator" value={""} />
              <button class="button" type="submit">Enviar</button>
          </form></>
      

        {heroe !== undefined &&

        

    
            <>
            <h1>Información del heroe borrado</h1>

                <div>

                    <div><h2>{heroe.name}</h2></div>
                    <div><img src={heroe.image} alt={"Error al cargar la imagen"} /></div>
                    <audio controls>
                        <source src={heroe.sound} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio 
                    </audio>
                    <div><p>Creador: {heroe.creator}</p></div>
                    
                </div>
                
            </>
        }


    </div>
    )
};

export default Page;
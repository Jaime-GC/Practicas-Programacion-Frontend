import Heroe from "../components/Heroe.tsx";
import { HeroeType } from "../types.ts";
import Axios, { AxiosError } from "npm:axios"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";




export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, HeroeType>) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("name") || undefined;
        const image = url.searchParams.get("image") || undefined;
        const sound = url.searchParams.get("sound") || undefined;
        const creator = url.searchParams.get("creator") || undefined;

        console.log("nombre", name, "image", image, "sound", sound, "creator", creator);
        
        if(name !== undefined && image !== undefined && sound !== undefined && creator !== undefined) {
          await Axios.post("https://supermondongo.deno.dev/", {name, image, sound, creator});     
            return ctx.render({name, image, sound, creator});  
        } else {
            return ctx.render({name: "", image: "", sound: "", creator});
        }
        
    } 
};

const Page = (props: PageProps<HeroeType>) => {

    const heroe = props.data;
    
    
    return (


    <div>


          <><form class="form" method="get">
            <h1>Crear heroe</h1>
              <input type="text" placeholder="Name" name="name" value={""} />
              <input type="text" placeholder="Image" name="image" value={""} />
              <input type="text" placeholder="Sound" name="sound" value={""} />
              <input type="text" placeholder="Creator" name="creator" value={""} />
              <button class="button" type="submit">Enviar</button>
          </form></>
      

        {heroe.name !== undefined &&

        

    
            <>
            <h1>Información del heroe creado</h1>

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
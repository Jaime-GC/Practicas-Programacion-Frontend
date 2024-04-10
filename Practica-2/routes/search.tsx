import Heroe from "../components/Heroe.tsx";
import { HeroeType } from "../types.ts";
import Axios from "npm:axios"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";




export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, HeroeType>) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("name") || undefined;
        
        if(name !== undefined) {
          const character = await Axios.get<HeroeType>("https://supermondongo.deno.dev/" + name);
        return ctx.render(character.data);
        } else {
            return ctx.render({});
        }
        
    } 
};

const Page = (props: PageProps<HeroeType>) => {


    const heroe = props.data[0];
    
    
    return (


    <div>

      {props.data[0] === undefined && 

          <><form class="form" method="get">
            <h1>Buscar heroe</h1>
              <input type="text" placeholder="Nombre del heroe" name="name" value={""} />
              <button class="button" type="submit">Enviar</button>
          </form></>
      }

      {props.data[0] !== undefined &&


          <>
          <h1>Información del heroe</h1>

                <Heroe
                  name={heroe.name}
                  image={heroe.image}
                  sound={heroe.sound}
                />
          </>
          
        

      }


    </div>
    )
};

export default Page;
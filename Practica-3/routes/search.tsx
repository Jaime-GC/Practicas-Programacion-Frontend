import Lover from "../components/Lover.tsx";
import { LoverType } from "../types.ts";
import Axios from "npm:axios"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";






export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, LoverType>) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("name") || undefined;

        console.log(name);
        
        if(name !== undefined) {
          const lover = await Axios.get<LoverType>("https://lovers.deno.dev/" + name);
        return ctx.render(lover.data);
        } else {
            return ctx.render({});
        }
        
    } 
};

const Page = (props: PageProps<LoverType>) => {


    const lover = props.data;

    console.log(lover);
    
    
    return (


    <div>


          <><form class="form" method="get">
            <h1>Buscar lover</h1>
              <input type="text" placeholder="Nombre del lover" name="name" value={""} />
              <button class="button" type="submit">Enviar</button>
          </form></>
      

      {props !== undefined &&


          <>
          <h1>Información del lover</h1>

                <Lover
                  name={lover.name}
                  photo={lover.photo}
                />
          </>

      }


    </div>
    )
};

export default Page;
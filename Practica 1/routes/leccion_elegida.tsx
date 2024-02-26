import Axios from "npm:axios"
import { FreshContext, Handlers, PageProps } from "https://deno.land/x/fresh@1.6.5/server.ts";


type Data = {
    text: string;
    
} & { id?: string };

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);
        const id = url.searchParams.get("id") || undefined;

        if(id !== undefined) {
        const text = await Axios.get<Data>("https://learnyourlesson.deno.dev/" + id);
        text.id = id;
        return ctx.render({ text: text.data, id: text.id});
        } else {
            return ctx.render({});
        }
        
    } 
};

const Page = (props: PageProps<Data>) => {
    const { text, id } = props.data;

    const texto = text;
    
    console.log(text, id);

    return (
        <div class="container">

        <h1>Leccion elegida</h1>

          {props.data.id === undefined && (
            <div>
              <form class="form" method="get">
                <input class="input" type="text" name="id" value={id || ""} />
                <button class="button1" type="submit" style={{fontSize: '15px'}}>Enviar</button>
              </form>
              <div id="botones"> 
                <a class="button1"  href="/" >Volver</a>
              </div>
            </div>
          )}
    
          {props.data.id && (
            <div>
              <h2>Has seleccionado esta lección:</h2>
              <h3 class="lesson">{text}</h3>
              <div id="botones"> 
                <a class="button1"  href="/leccion_elegida" >Volver</a>
              </div>
            </div>
          )}
        </div>
      );
};

export default Page;
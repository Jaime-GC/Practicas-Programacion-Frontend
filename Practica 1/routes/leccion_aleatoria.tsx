import Axios from "npm:axios"
import { FreshContext, Handlers, PageProps } from "https://deno.land/x/fresh@1.6.5/server.ts";



type Data = {
    text: string;
    id?: string;
};

export const handler: Handlers = {
    GET: async (_REQ: Request, ctx: FreshContext<unknown, Data>) => {
        const text = await Axios.get<Data>("https://learnyourlesson.deno.dev/");
        return ctx.render(text.data);
    } 
};

const Page = (props: PageProps<Data>) => {
    const texto = props.data;
    return (
        <div class="container">
            
                <h2>Ha tocado de forma aleatoria esta leccion: </h2>
                <h3 class="lesson">{texto}</h3>
            <div id="botones"> 
                <a class="button1"  href="/" >Volver</a>
            </div>
        </div>
    )
};

export default Page;
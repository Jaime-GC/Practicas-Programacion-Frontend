import Axios from "npm:axios"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";


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
            
        <h2>Ha tocado esta leccion: </h2>
        <h3 class="lesson">{texto}</h3>
        <a class="button"  href="/" style={{fontSize: '15px', padding: '15px 20px'}}>Volver</a>

    </div>
    )
};

export default Page;
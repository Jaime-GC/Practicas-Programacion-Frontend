import { FunctionalComponent } from "preact";
import axios from "npm:axios";
import { useState } from "preact/hooks";
import { FreshContext, Handlers, PageProps } from "https://deno.land/x/fresh@1.6.5/server.ts";



export const handler: Handlers = {
    GET: async (_REQ: Request, ctx: FreshContext<unknown, Data>) => {
        const text = await Axios.get<Data>("https://learnyourlesson.deno.dev/");
        return ctx.render(text.data);
    } 
};



const EveryHeroes: FunctionalComponent = () => {
    const [heroes, setHeroes] = useState<string[]>([]); 
    
    const getHeroes = async (): Promise<void> => {
        const url = "https://supermondongo.deno.dev/";
        const response = await axios.get(url);
        setHeroes(response.data);
        debugger;
    }

    

    return (
        <div>
            <h1>Every Heroes</h1>
            <ul>
                {heroes.map((hero) => (
                    <li>{hero.name}</li>
                ))}
            </ul>
        </div>
    );

};

export default EveryHeroes;
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

type HeroeData = {
    name: string;
    image: string;
    sound: number;
};


const EveryHeroes: FunctionalComponent = () => {
    const [heroes, setHeroes] = useState<HeroeData[]>([]); 
    
    const getHeroes = async (): Promise<void> => {
        const url = "http://localhost:8080/https://supermondongo.deno.dev/";
        const response = await axios.get(url, {
            headers: {
                'origin': 'http://localhost:8000',
                // o puedes usar 'x-requested-with': 'XMLHttpRequest'
            }
        });
        console.log(response.data);
        setHeroes(response.data);
        
    }

    getHeroes();

    {console.log("Estos son los heroes:" + heroes + "fin")}

    return (
        <div  class="container">
            <h1>Every Heroes</h1>
            
            
                {heroes.map((hero) => (
                    <div>{hero.name}</div>
                ))}
            
        </div>
    );

};

export default EveryHeroes;
import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { HeroeType } from "../../types.ts";




export const handler: Handlers = {
  GET: async (_REQ: Request, ctx: FreshContext<unknown, HeroeType>) => {
      const { name } = ctx.params;
      const heroe = await Axios.get<HeroeType>("https://supermondongo.deno.dev/" + name);
      return ctx.render(heroe.data);
  } 
};



const Page = (props: PageProps<HeroeType>) => {
  const { name, image, sound } = props.data[0]; //Usamos el [0] ya que props.data es un ARRAY de un elemento, 
  //console.log("Sin [0]" , props.data);          NO UN SOLO ELEMENTO de tipo objeto
  //console.log("Con [0]" , props.data[0]);

  
  return ( 
  <div>


    {props.data[0] !== undefined &&

    
      <>
        <h1>Información del heroe</h1>

            <div>

                <div><h2>{name}</h2></div>
                <div><img src={image }/></div>
                <audio controls>
                  <source src={sound} type="audio/mpeg" />
                  Tu navegador no soporta el elemento de audio 
                </audio>
            
            </div>
        
      </>
    }


  </div>
  )
};

export default Page;
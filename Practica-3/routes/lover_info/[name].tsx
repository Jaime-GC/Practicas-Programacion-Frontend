import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { LoverType } from "../../types.ts";




export const handler: Handlers = {
  GET: async (_REQ: Request, ctx: FreshContext<unknown, LoverType>) => {
      const { name } = ctx.params;
      const lover = await Axios.get<LoverType>("https://lovers.deno.dev/" + name);
      return ctx.render(lover.data);
  } 
};



const Page = (props: PageProps<LoverType>) => {
  const {name, age,sex,description,hobbies,photo,comments}=props.data;

  console.log("name", name, "age", age, sex, description, hobbies, photo, comments);

  
  return (
    <div>
      {props !== undefined ? (
        <>
          

          <div class="form">
            <h1>Información del lover</h1>
            
            <div>
              <h2>Su nombre es: {name}</h2>
            </div>

            <div>
              <h3>Su edad es: {age}</h3>
            </div>

            <div>
              <h3>Su sexo es: {sex}</h3>
            </div>
            
            <div>
              <h3>Su descripción es: {description}</h3>
            </div>

            <div>
              <h3>Sus hobbies son: {hobbies}</h3>
            </div>

            <div>
              <img class="foto" src={photo} />
            </div>

            <div>
              <h3>Sus comentarios son: {comments}</h3>
            </div>
          </div>
        </>
      ) : (
        <div>Elemento no encontrado</div>
      )}
    </div>
  );
};

export default Page;
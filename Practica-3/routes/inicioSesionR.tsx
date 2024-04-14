import { Handlers } from "$fresh/src/server/types.ts";
import { FreshContext } from "$fresh/server.ts";

import Axios from "npm:axios";
import InicioSesion from "../islands/InicioSesion.tsx";


export const handler: Handlers = {
  POST: async (req: Request, _ctx: FreshContext) => {
    try {
      const formulario = await req.formData();
      const name = formulario.get("name");
      const password = formulario.get("password");

      if (!name || !password) {
        return new Response("Faltan datos", { status: 400 });
      }
      
      const response = await Axios.post(`https://lovers.deno.dev/login`, {
        name: name,
        password: password,
      }, { headers: { "Content-Type": "application/json" } });
      if (!response) {
        return new Response("Error al hacer login con el response", {
          status: 500,
        }); 
      }
      

      return new Response("", {
        status: 303,
        headers: { Location: `lover_info/${name}` },
        });
  
        
      ;
    } catch (error) {
      return new Response("Error al hacer login", { status: 500 });
    }
  },
};

const Page = () => {
  return(
    <InicioSesion/>
  )
};
export default Page;

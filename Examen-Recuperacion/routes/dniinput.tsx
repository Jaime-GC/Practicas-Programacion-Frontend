import dniinput from "../islands/dniinput.tsx";
import {FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
   
  };


const Page = () => {

  return (
    <>
      
      <div class="main-container">
          <div class="dni-input-container">
            <label for="dni">Introduce tu DNI:</label>
            <input placeholder="12345678A" type="text" id="dni" value="" />
            <button>Ir a mi agenda</button>
          </div>
        </div>

        <dniinput></dniinput>


    
    </>
  );
}

export default Page;
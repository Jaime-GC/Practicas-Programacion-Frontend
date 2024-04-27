import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";
import Shower from "../components/Shower.tsx";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import HiButton from "./HiButton.tsx";



const Hihihi:FunctionComponent = () => {


  const [name, setName] = useState<string>("");
  const [apellido, setApellido] = useState<string>(""); //Añadimos este state que faltaba 
  
  const [name1, setName1] = useState<string>("");
  const [apellido1, setApellido1] = useState<string>(""); //Añadimos este state que faltaba 


  const saludar =  (name: string, apellido: string) => {
    console.log(name, apellido);
    setName1(name);
    setApellido1(apellido);
  }
    



  return (
    <div class="formBody">


      <form class="formBox" method="get" target="/hihihi">

        <h3>Say hi hi hi</h3>

        <input type="text" name="nombre" placeholder={"Name"}  
        onInput={(e) => {
          setName(e.currentTarget.value);
        }} />

        <br />

        <input type="text" name="apellido" placeholder={"Last name"} 
        onInput={(e) => {
          setApellido(e.currentTarget.value); 
        }} />

        <br />

        <button class="trippyBackgroundAnimated"
         onClick={(e) => {
          e.preventDefault(); //Evita que se ejecute el evento por defecto del botón
          saludar(name, apellido);
        }}>
          Hi!
        </button>

      </form> 



      <Shower
        nombre={name1}
        apellido={apellido1} //Añadimos este signal que faltaba
      />

    </div>
  );
};

export default Hihihi;

import { Signal } from "@preact/signals";
import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const Shower: FunctionalComponent<{ nombre: Signal<string>, apellido: Signal<string> }> = ({ nombre, apellido }) => {
  return (
    <div class="vintage__container">
      <h1 class="vintage vintage__top">{nombre}</h1>
      <h1 class="vintage vintage__bot">{apellido}</h1>
    </div>
  );
};

export default Shower;

import { FunctionComponent, JSX } from "preact";


const BorrarUsuario: FunctionComponent = () => {


  return (
    <div>
      <form action="/borrarUsuarioR" method="POST" class="form">
        <h1>Borrar usuario</h1>

          <label>
            Usuario
            <input type="text" name="name" />
          </label>

          <label>
            Contraseña:
            <input type="password" name="password" />
          </label>
        

          <button class="button1" type="submit">Borrar</button>
      </form>
    </div>
  );
};
export default BorrarUsuario;

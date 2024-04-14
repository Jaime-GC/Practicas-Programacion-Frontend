import { FunctionComponent } from "preact";

const InicioSesion: FunctionComponent = () => {

  return (
    <div>
      <form action="/InicioSesionR" method="POST" class="form">

        <h1>Iniciar sesión</h1>

          <label>
            Usuario
            <input type="text" name="name" />
          </label>

          <label>
            Contraseña:
            <input type="password" name="password" />
          </label>

        <button type="submit" class="button1">Iniciar</button>
      </form>
    </div>
  );
};
export default InicioSesion;

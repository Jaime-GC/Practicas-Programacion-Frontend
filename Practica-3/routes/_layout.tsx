import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
    const { Component } = props;

    


    
  return (
    <div class="layout">

      <header>
        <div className="divbar">

          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/search">Búsqueda</a></li>
            <li><a href="/inicioSesionR">Iniciar Sesión</a></li>
            <li><a href="/crearCuentaR">Crear Cuenta</a></li>
            <li><a href="/BorrarUsuarioR">Borrar Usuario</a></li>
            
          </ul>

        </div>

      </header>


      <main>
      
          <Component class="fondo"/>
          
        
      </main>


      <footer>
        <p>Derechos de autor Lovers App 2024 Jaime González Carbajo ©</p>
      </footer>
    </div>
  );
};

export default Layout;

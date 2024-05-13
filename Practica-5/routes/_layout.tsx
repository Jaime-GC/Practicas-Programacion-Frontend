import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
    const { Component } = props;
    
  return (
    <div class="layout">

      <header>
        <div className="divbar">

          <ul>
            <li><a href="/">Inicio</a></li>

            
          </ul>

        </div>

      </header>


      <main>
      
          <Component class="fondo"/>
          
        
      </main>


      <footer>
        <p>Derechos de autor Films App 2024 Jaime González Carbajo ©</p>
      </footer>
    </div>
  );
};

export default Layout;

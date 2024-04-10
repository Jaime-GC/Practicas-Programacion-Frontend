import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
    const { Component } = props;
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/search">Búsqueda</a></li>
            <li><a href="/create_heroe">Crear Héroe</a></li>
          </ul>
        </nav>
      </header>


      <main>
      
          <Component />
          
      
        
      </main>


      <footer>
        <p>Derechos de autor Tierra 2 2024 Jaime González Carbajo ©</p>
      </footer>
    </div>
  );
};

export default Layout;

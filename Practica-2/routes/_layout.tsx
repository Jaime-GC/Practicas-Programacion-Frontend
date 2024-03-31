import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
    const { Component } = props;
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/searchR">Búsqueda</a></li>
            <li><a href="/create">Crear Héroe</a></li>
          </ul>
        </nav>
      </header>


      <main>
      <div class="flex-column">
        <h1 class="mainTitle">Heroes</h1>
        <div class="flex-row flex-around">
          <Component />
          
        </div>
      </div>
        
      </main>


      <footer>
        <p>Derechos de autor © 2024 Tierra 2</p>
      </footer>
    </div>
  );
};

export default Layout;

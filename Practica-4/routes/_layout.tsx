import { PageProps } from "$fresh/server.ts";
import CustomHeader from "../islands/CustomHeader.tsx";

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <div class="columnBody">
      <CustomHeader
        links={[
          { href: "/lovers", text: "Lovers" },
          { href: "/pokemons", text: "Pokemon" },
          { href: "/superheroes", text: "Superheroes" },
          { href: "/hihihiR", text: "A ticket to ride" },
        ]}
      />
      <Component />
    </div>
  );
};

export default Layout;

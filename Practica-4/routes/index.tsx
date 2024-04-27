import StartComp from "../islands/start.tsx";// Cambiamos el start desde los componentes a la isla

export type Tpokemon = {
  _id: string;
  name: string;
  image: string;
  sound: string;
};

const Home = () => {
  return (<StartComp/>); 
};

export default Home;

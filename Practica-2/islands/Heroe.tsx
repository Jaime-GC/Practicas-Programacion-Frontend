import { FunctionComponent } from "preact";

type HeroeProps = {
  name: string;
  image: string;
  sound: string;
};

const Heroe: FunctionComponent<HeroeProps> = (props) => {
  const { name, image, sound } = props;
  return (
    <div class="characterContainer">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m half-rounded" src={image} />
      <audio controls>
        <source src={sound} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <p>
      </p>
    </div>
  );
};

export default Heroe;

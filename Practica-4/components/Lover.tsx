import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const Lover: FunctionComponent<{ image: string }> = (
  { image },
) => {
  return (
    <div
      class="lover"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    </div>
  );
};

export default Lover;

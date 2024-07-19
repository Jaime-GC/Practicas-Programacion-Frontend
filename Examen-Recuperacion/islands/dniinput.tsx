import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";



const dniinput: FunctionComponent = () => {
  const [dni, setDni] = useState("");

  const handleInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setDni(target.value);
  };

  const handleButtonClick = () => {
    console.log(`DNI ingresado: ${dni}`);
  };

  return (
    <div class="main-container">
      <div class="dni-input-container">
        <label for="dni">Introduce tu DNI:</label>
        <input
          placeholder="12345678A"
          type="text"
          id="dni"
          value={dni}
          onInput={handleInputChange}
        />
        <button onClick={handleButtonClick}>Ir a mi agenda</button>
      </div>
    </div>
  );
};

export default dniinput;
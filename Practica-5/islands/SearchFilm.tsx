// islands/SearchFilm.tsx
import { useState } from "preact/hooks";
import { FilmType } from "../types.ts";
import Film from "../components/Film.tsx";
import { FunctionComponent } from "preact";

interface SearchFilmProps {
  initialFilms: FilmType[];
  initialBrands: string[];
  initialIsos: string[];
}

const SearchFilm: FunctionComponent<SearchFilmProps> = (props) => {
  const [films, setFilms] = useState(props.initialFilms);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [iso, setIso] = useState("");
  const [color, setColor] = useState("");
  const [formatThirtyFive, setFormatThirtyFive] = useState("");
  const [formatOneTwenty, setFormatOneTwenty] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    let filteredFilms = props.initialFilms;

    if (name) {
      filteredFilms = filteredFilms.filter((film) =>
        film.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (brand) {
      filteredFilms = filteredFilms.filter(
        (film) => film.brand.toLowerCase() === brand.toLowerCase()
      );
    }

    if (iso) {
      filteredFilms = filteredFilms.filter((film) => film.iso === Number(iso));
    }

    if (color) {
        const isColor = color === "true" ? true : false;
      filteredFilms = filteredFilms.filter((film) => film.color === isColor);
    }

    if (formatThirtyFive) {
      const isFormatThirtyFive = formatThirtyFive === "true";
      filteredFilms = filteredFilms.filter(
        (film) => film.formatThirtyFive === isFormatThirtyFive
      );
    }

    if (formatOneTwenty) {
      const isFormatOneTwenty = formatOneTwenty === "true";
      filteredFilms = filteredFilms.filter(
        (film) => film.formatOneTwenty === isFormatOneTwenty
      );
    }

    setFilms(filteredFilms);
  };

  const resetFilters = () => {
    setName("");
    setBrand("");
    setIso("");
    setColor("");
    setFormatThirtyFive("");
    setFormatOneTwenty("");
    setFilms(props.initialFilms);
  };

  return (
    <div>
      <h1 className="mainTitle">Buscador de Films</h1>

      <form className="form" onSubmit={handleSubmit}>
        <h2>Introduce los filtros</h2>


        <label>
          Name:
        <input
            type="text"
            name="name"
            value={name}
            onInput={(e) => {
                setName(e.target.value);
                {console.log(e.target.value)}
                handleSubmit(e);
            }}
            
        />
        </label>

        <label>
          Brand:
          <select
            name="brand"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              handleSubmit(e);
              }}>
            <option value="">All</option>
            {props.initialBrands.map((brand, index) => (
              <option key={index} value={brand}>{brand}</option>
            ))}
          </select>
        </label>

        <label>
          ISO:
          <select
            name="iso"
            value={iso}
            onChange={(e) => {
              setIso(e.target.value);
              handleSubmit(e);
            }}
            onBlur={(e) => {
              setIso(e.target.value);
              handleSubmit(e);
              }}>
            <option value="">All</option>
            {props.initialIsos.map((iso, index) => (
              <option key={index} value={iso}>{iso}</option>
            ))}
          </select>
        </label>

        <label>
          Color:
          <select
            name="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              handleSubmit(e);
            }}>
            <option value="">All</option>
            <option value="true">Color</option>
            <option value="false">Black and White</option>
          </select>
        </label>

        <label>
          FormatThirtyFive:
          <select
            name="formatThirtyFive"
            value={formatThirtyFive}
            onChange={(e) => {
              setFormatThirtyFive(e.target.value);
              handleSubmit(e);
            }}>
            <option value="">All</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </label>

        <label>
          FormatOneTwenty:
          <select
            name="formatOneTwenty"
            value={formatOneTwenty}
            onChange={(e) => {
              setFormatOneTwenty(e.target.value);
              handleSubmit(e);
            }}>
            <option value="">All</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </label>


        <div className="botones">
          <button className="button" type="submit">
            Enviar
          </button>
          <button className="button" type="button" onClick={resetFilters}>
            Reset
          </button>
        </div>
      </form>

      <div className="flex-row flex-around">
        {films.length > 0 ? (
          films.map((film) => (
            <Film
              _id={film._id}
              name={film.name}
              brand={film.brand}
              photo={film.staticImageUrl}
              film={film}
            />
          ))
        ) : (
          <p>No se encontraron films filtrados.</p>
        )}
      </div>
    </div>
  );
}

export default SearchFilm;
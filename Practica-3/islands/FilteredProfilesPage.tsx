import { useState } from "preact/hooks";
import { FunctionComponent } from "preact"; // Importamos FunctionComponent de preact


// Tipo para el objeto Lover
type LoverType = {
  name: string;
  age: number;
  sex: string;
  hobbies: string[];
};

// Datos simulados de perfiles (para propósitos de ejemplo)
const loversData: LoverType[] = [
  {
    name: "Alice",
    age: 25,
    sex: "Female",
    hobbies: ["Reading", "Painting"],
  },
  {
    name: "Bob",
    age: 30,
    sex: "Male",
    hobbies: ["Gardening", "Cooking"],
  },
  {
    name: "Charlie",
    age: 22,
    sex: "Male",
    hobbies: ["Traveling", "Photography"],
  },
];

const FilteredProfilesPage:FunctionComponent = () => {
  // Estado para almacenar los perfiles filtrados
  const [filteredLovers, setFilteredLovers] = useState<LoverType[]>(loversData);

  // Función para manejar el cambio en los criterios de filtro
  const handleFilterChange = (filterKey: string, value: string) => {
    let filteredResults = loversData;

    if (filterKey === "sex" && value !== "") {
      filteredResults = loversData.filter((lover) => lover.sex.toLowerCase() === value.toLowerCase());
      console.log("Value", value);
    } else if (filterKey === "age"  && value !== "") {
      const age = parseInt(value);
      filteredResults = loversData.filter((lover) => lover.age === age);
    } else if (filterKey === "hobbies" && value !== "") {
      filteredResults = loversData.filter((lover) => lover.hobbies.includes(value));
    } else if (value === "" || value === null || value === undefined) {
      
      filteredResults = loversData;
    }

    setFilteredLovers(filteredResults);
  };

  return (
    <div>
      <h1>Filtered Profiles</h1>
      <div>
        {/* Selector de filtro por sexo */}
        <label>
          Filter by Sex:
          <select onChange={(e) => handleFilterChange("sex", e.target.value)}>
            <option value= "">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        {/* Selector de filtro por edad */}
        <label>
          Filter by Age:
          <input type="number" min="0" onChange={(e) => handleFilterChange("age", e.target.value)} />
        </label>

        {/* Input de texto para filtrar por hobbies */}
        <label>
          Filter by Hobbies:
          <input type="text" onChange={(e) => handleFilterChange("hobbies", e.target.value)} />
        </label>
      </div>

      {/* Mostrar perfiles filtrados */}
      <div>
        {filteredLovers.map((lover) => (
          <div key={lover.name}>
            <h2>{lover.name}</h2>
            <p>Age: {lover.age}</p>
            <p>Sex: {lover.sex}</p>
            <p>Hobbies: {lover.hobbies.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredProfilesPage;

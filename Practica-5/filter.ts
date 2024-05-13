export function filterPropertyJSON(jsonData, propiedad:string) {
    const propiedades: string[] = [];
    
    for (const obj of jsonData) {
      // Verificar si el objeto tiene la propiedad "brand"
      if (propiedad in obj) {
        const prop = obj[propiedad];
        if (!propiedades.includes(prop)) {
          propiedades.push(prop);
        }
      } else {
        console.error("El objeto no tiene la propiedad:" + propiedad + ".");
      }
    }
    return propiedades;
  }
  
  

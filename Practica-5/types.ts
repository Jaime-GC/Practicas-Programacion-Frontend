export type FilmType = {
    _id: string;
    brand: string;
    name: string;
    iso: number;
    formatThirtyFive: boolean;
    formatOneTwenty: boolean;
    color: boolean;
    process: string;
    staticImageUrl: string;
    description: string;
    customDescription: any[]; // Opcional, dependiendo de la estructura real de tus datos
    keyFeatures: KeyFeature[];
    dateAdded: string;
    __v: number;
};
  
export type KeyFeature = {
    _id: string;
    feature: string;
};  


export type project = {
    _id: string;
    name: string;
    description: string;
    films: filmItem[];
  };

export type filmItem = {
    film: FilmType;
    quantity: number;
};
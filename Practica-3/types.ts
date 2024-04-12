export type LoverType = {
  name: string;
  password: string;
  age: number;
  sex: string;
  description: string;
  hobbies: string[];
  photo: string;
  comments: comment[];
};


export type comment = {
  user: string;
  message: string;
};
// ENUM, para los tipos de roles
export enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
  ROOT = 'ROOT',
}

// Explicacion de un TYPE, para agregar tipos de datos basicos
// export type data = {
//     type: string
// }

// Hacemos uso del tipo de data
// const myData: data = {
//     type: 'sdsdsds'
// }

// Para acceder seria desde, myData
//myData.type;

// La interface de la entidad
export interface User {
  id: string;
  name: string;
  email: string;
  phone: number;
  role: USER_ROLE;
}

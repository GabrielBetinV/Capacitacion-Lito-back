// ENUM, para los tipos de roles
export enum USER_ROLE {
    ADMIN = 'ADMIN',
    USER = 'USER',
    ROOT = 'ROOT',
  }
  


export interface Iuser {        
    name: string;
    email: string;
    phone: string;
    role: USER_ROLE;
}
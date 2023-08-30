import { USER_ROLE } from "src/user/entity/user.entity";


export interface Iuser {        
    name: string;
    email: string;
    phone: string;
    role: USER_ROLE;
}
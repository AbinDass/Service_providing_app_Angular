import { userData } from "./usersType";

export interface workers{
    servicetitle:string;
    user:userData;
    location:string;
    liecence:string[];
    createdAt:string;
    approved:boolean;
    _id?:string;
}
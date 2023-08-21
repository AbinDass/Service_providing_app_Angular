import { userModel } from './userState';

export interface requests {
  access?: boolean;
  createdAt?: string;
  decleration?: string;
  distric: string;
  email: string;
  firstname: string;
  isAdmin?: boolean;
  location?: string;
  phone: number;
  profilepicture: string[];
  requests: request[];
  role?: string;
  secondname: string;
  state?: string;
  subscriptiondate?: string;
  subscriptionexpirydate?: string;
  updatedAt?: string;
  _id?: string;
}

interface request {
  requestStatus: boolean;
  requstedUserId: userModel;
  _id?: string;
}

export interface appointment {
  createdAt: string;
  date: string;
  descreption: string;
  status: string;
  time: string;
  updatedAt: string;
  user: userModel;
  worker: string;
  _id?: string;
}

export interface appointmentStatus {
_id?:string;
user: string;
worker:userModel;
date: string;
time:string;
descreption:string
status:string;
createdAt?:Date
updatedAt?:Date
}
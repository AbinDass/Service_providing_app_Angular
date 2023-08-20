export interface profiledata {
  access?: boolean;
  decleration: boolean;
  distric: string;
  email: string;
  firstname: string;
  secondname: string;
  location?: string;
  phone: string;
  profilepicture: string[];
  // requests:[{…}]
  role: string;
  state?: string;
  subscriptiondate?: string;
  subscriptionexpirydate?: string;
}

export interface myservice{
    servicetitle:string;
    location:string;
    description:string;
    labour:number
}

export interface myposts{
    caption:string;
    image:string[];
}
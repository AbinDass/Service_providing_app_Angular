export interface usersList {
  userdata:userData;
}

export interface userData{
    _id?:string;
    firstname: string | undefined | null,
    secondname: string | undefined | null,
    email: string | undefined | null;
    phone: string | undefined | null;
    password?: string | undefined | null;
    confirmpassword?: string | undefined | null;
    role?: string | undefined | null;
    district?: string | undefined | null;
    location?: string | undefined | null;
    profilepicture: string[];
    decleration?:string;
    isAdmin?:boolean;
    access?:boolean;
}
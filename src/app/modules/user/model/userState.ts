export interface user {
    token: string|null;
    user:userModel;
    isLoading?: boolean;
    isLogin?: boolean;
    error?: string;
}

export interface userdata {
    token: string;
    userdata:userModel;
    isLoading?: boolean;
    isLogin?: boolean;
    error?: string;
}

export interface userModel{
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
    profilepicture?: string[]
}
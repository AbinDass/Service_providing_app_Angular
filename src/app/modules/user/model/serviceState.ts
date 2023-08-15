export interface availableService {
    services:[{
        description: string,
        isfeleted?: boolean,
        servicelogo?:string[];
        thumbnail:string[];
        title:string;
        _id?:string;
    }]
}

export interface Search{
        
            servicetitle:string,
            location:string,
            _id?:string
}

export interface services{
    title:string,
}

export interface addService{
    servicetitle:string
    labour: string
    description: string
    liesence: File | null
    id?:string | null
}
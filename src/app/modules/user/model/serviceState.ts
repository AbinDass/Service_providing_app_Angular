export interface availableService {
    services:[{
        description: string,
        isdeleted?: boolean,
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
    liesence: string | null
    id?:string | null
}
export interface locations{
    place_name: string;
    text: string;
    context:[
        {
            id: string,
            text: string
        }
    ]
}

export interface location{
    text: string;
    context:[
        {
            id: string,
            text: string
        }
    ]
}

export interface search_location{
    location: string
    district: string|null;
    state:string|null

}
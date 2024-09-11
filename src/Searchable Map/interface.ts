


export interface SearchableMapProps{
    longitude:number,
    latitude:number,
    zoom:number,
    accessToken:string,
    mapKey:string
}

export interface ISearchResult{
    formatted_address:string,
    types:string[],
    latitude:number,
    longitude:number
}


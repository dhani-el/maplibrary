
import { locationTypes } from "../LocationDropDown/interface"

export interface SearchableMapProps{
    longitude:number,
    latitude:number,
    zoom:number,
    accessToken:string,
    mapKey:string
}

export interface ISearchResult{
    formatted_address:string,
    type:locationTypes,
    latitude:number,
    longitude:number
}


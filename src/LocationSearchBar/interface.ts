import { ISearchResult } from "../Searchable Map/interface"

export interface SearchBarComponentProps{
    mapKey:string,
    exposeResult(results:ISearchResult[]):void 
}
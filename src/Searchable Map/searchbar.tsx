
import {SearchBox} from "@mapbox/search-js-react";
import { SearchBarProps } from "./interface";

export default function SearchBar({accessToken,country}:SearchBarProps){
    return <SearchBox accessToken={accessToken} options={{country}}  />
}
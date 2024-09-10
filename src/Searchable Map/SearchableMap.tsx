
import {useEffect,useRef, useState} from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { SearchableMapProps } from "./interface";
import "./style.scss";
import SearchBar from "../LocationSearchBar/searchBar";
import LocationDropdown from "../LocationDropDown/dropdown";
// import { LocationDropdownProps,locationTypes } from "../LocationDropDown/interface";
import { ISearchResult } from "./interface";

export default function SearchableMap({longitude,latitude,zoom,accessToken,mapKey}:SearchableMapProps){
    const [Longitude, setLongitude] = useState(longitude);
    const [Latitude, setLatitude] = useState(latitude);
    const [Zoom, setZoom] = useState(zoom);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [searchResult,setSearchResult] = useState<ISearchResult[]>([]);

    useEffect(()=>{
        mapboxgl.accessToken = accessToken;

        if (mapContainerRef.current !== null) {
                new mapboxgl.Map({
                    container:mapContainerRef.current,
                    center:[Longitude,Latitude],
                    zoom:Zoom,
                })
        }

    });


    useEffect(()=>{
        setLatitude(()=>latitude);
        setLongitude(()=>longitude);
        setZoom(()=>Zoom)
    },[longitude,latitude,zoom,accessToken]);

    return (
                <div id="main-container">
                    <div id="mapContainer" ref={mapContainerRef}>
                    </div>
                    <div>
                        <SearchBar mapKey={mapKey} exposeResult={setSearchResult} />
                        <LocationDropdown locations={searchResult} />
                    </div>
                </div>
            )
}
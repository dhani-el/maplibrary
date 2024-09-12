
import {useEffect,useRef, useState} from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location, SearchableMapProps } from "./interface";
import "./style.scss";
import SearchBar from "../LocationSearchBar/searchBar";
import LocationDropdown from "../LocationDropDown/dropdown";
import { ISearchResult } from "./interface";

export default function SearchableMap({longitude,latitude,zoom,accessToken,mapKey}:SearchableMapProps){
    const [Longitude, setLongitude] = useState(longitude);
    const [Latitude, setLatitude] = useState(latitude);
    const [Zoom, setZoom] = useState(zoom);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [searchResult,setSearchResult] = useState<ISearchResult[]>([]);
    const [pointChosen,setPointChosen] = useState<Location>();
    const [showDropDown,setShowDropDown] = useState<boolean>(false);

    function expose(lat:number,lng:number){
        setPointChosen(()=>({lat,lng}));
        setShowDropDown(()=>false);
    }

    useEffect(()=>{
        
        mapboxgl.accessToken = accessToken;
          let map
        if (mapContainerRef.current !== null) {
               map = new mapboxgl.Map({
                    container:mapContainerRef.current,
                    center:[pointChosen?.lng||Longitude,pointChosen?.lat||Latitude],
                    zoom:(pointChosen?.lng?17:Zoom)
                })

        }
        new mapboxgl.Marker().setLngLat(new mapboxgl.LngLat(pointChosen?.lng||Longitude , pointChosen?.lat||Latitude)).addTo(map as mapboxgl.Map); 
    },[pointChosen]);

    useEffect(()=>{
        if (searchResult.length>0) {
            
            setShowDropDown(()=>true)
        }
    },[searchResult]);

    useEffect(()=>{
        setLatitude(()=>latitude);
        setLongitude(()=>longitude);
        setZoom(()=>Zoom)
    },[longitude,latitude]);

    return (
                <div id="main-container">
                    <div id="mapContainer" ref={mapContainerRef}>
                    </div>
                    <div id="search-dropdown-container">
                        <SearchBar mapKey={mapKey} exposeResult={setSearchResult} />
                        {showDropDown && <LocationDropdown locations={searchResult} exposeCoordinates={expose}/>}
                    </div>
                </div>
            )
}
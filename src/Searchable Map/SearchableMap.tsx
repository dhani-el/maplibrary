
import {useEffect,useRef, useState} from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { SearchableMapProps } from "./interface";
import "./style.scss"

export default function SearchableMap({longitude,latitude,zoom,accessToken}:SearchableMapProps){
    const [Longitude, setLongitude] = useState(longitude);
    const [Latitude, setLatitude] = useState(latitude);
    const [Zoom, setZoom] = useState(zoom);
    const mapContainerRef = useRef<HTMLDivElement>(null);
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
    },[longitude,latitude,zoom,accessToken])

    return (
                <div id="mapContainer" ref={mapContainerRef}>
                </div>
            )
}
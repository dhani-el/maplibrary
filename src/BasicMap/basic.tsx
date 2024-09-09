
import {useEffect,useRef, useState} from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { BasicMapProps } from "./interface";
import "./style.scss"

export default function BasicMap({longitude,latitude,zoom,accessToken}:BasicMapProps){
    const [Longitude, setLongitude] = useState(longitude);
    const [Latitude, setLatitude] = useState(latitude);
    const [Zoom, setZoom] = useState(zoom);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        mapboxgl.accessToken = accessToken;
        let map
        const geojson = {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [Longitude, Latitude]
                },
                properties: {
                  title: 'Mapbox',
                  description: 'Washington, D.C.'
                }
              },
            ]
          };
        if (mapContainerRef.current !== null) {
                map = new mapboxgl.Map({
                    container:mapContainerRef.current,
                    center:[Longitude,Latitude],
                    zoom:Zoom,
                })
        }

        for (const feature of geojson.features) {
  
            // code from step 5-1 will go here
          
            // make a marker for each feature and add to the map
            new mapboxgl.Marker().setLngLat(new mapboxgl.LngLat(feature.geometry.coordinates[0],feature.geometry.coordinates[1])).addTo(map as mapboxgl.Map);  // Replace this line with code from step 5-2
          
             //code from step 6 will go here
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
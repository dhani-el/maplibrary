
import { useEffect,useRef } from "react";
import { LocationDropdownProps,ALocationDropdownProps,TypesIconProps,locationTypes} from "./interface";
import "./style.scss";
import { Buildings2,Car,Airplane,Location,House,Bus,Arrow,Building,AlignBottom, Tree } from "iconsax-react";




export default function LocationDropdown({locations,exposeCoordinates}:LocationDropdownProps){
    useEffect(function(){
        console.log("locations",locations);
        
    })

    return <div id="location-container"> 
                {
                    locations?.map(function(aLocation){
                        return <Alocation formatted_address={aLocation.formatted_address} types={aLocation.types} geometry={aLocation.geometry}  exposeCoordinates={exposeCoordinates} />
                    })
                }
            </div>
}

function Alocation({formatted_address,types,geometry,exposeCoordinates}:ALocationDropdownProps){
    const aLocationRef = useRef<HTMLDivElement>(null);
    function clickHandler(){
                 console.log(formatted_address,geometry.location.lat,geometry.location.lng);
                 exposeCoordinates(geometry.location.lat,geometry.location.lng);
    }
    useEffect(()=>{
        aLocationRef.current?.addEventListener("click",clickHandler)

        return ()=>{
            aLocationRef.current?.removeEventListener("click",clickHandler)
        }
    })

    return <div ref={aLocationRef} id="a-location-container">
            <span id="a-location-container-type"><TypesIcon type={types[0]} /></span>
            <p id="a-location-container-adress">{formatted_address}</p>
    </div>
}

function TypesIcon({type}:TypesIconProps){
     switch (true) {
        case type === locationTypes.default:
             return <Location/>
        case type === locationTypes.airport:
            return <Airplane/>
        case type === locationTypes.premise || locationTypes.subpremise:
            return <House/>
        case type === locationTypes.bus_station || locationTypes.train_station || locationTypes.transit_station:
            return <Bus/>
        case type === locationTypes.street_address:
            return <Arrow/>
        case type === locationTypes.establishment:
            return <Building/>
        case type === locationTypes.landmark:
            return <AlignBottom/>
        case type === locationTypes.parking:
            return <Car/>
        case type === locationTypes.neighborhood:
            return <Buildings2/>
        case type === locationTypes.natural_feature:
            return <Tree/>
    
        default:
             return <Location/>
    }
}
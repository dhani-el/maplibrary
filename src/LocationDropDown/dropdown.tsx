
import { useEffect } from "react";
import { LocationDropdownProps,ALocationDropdownProps,TypesIconProps,locationTypes} from "./interface";
import "./style.scss";
import { Airplane,Location,House,Bus } from "iconsax-react";




export default function LocationDropdown({locations}:LocationDropdownProps){
    useEffect(function(){
        console.log("locations",locations);
        
    })

    return <div id="location-container"> 
                {
                    locations?.map(function(aLocation){
                        return <Alocation formatted_address={aLocation.formatted_address} types={aLocation.types} />
                    })
                }
            </div>
}

function Alocation({formatted_address,types}:ALocationDropdownProps){

    // function chooseType(values:string[]):string{
    //     return values.length > 1 ? "default" : values[0];
    // }
    
    return <div id="a-location-container">
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
        case type === locationTypes.premise:
            return <House/>
        case type === locationTypes.bus_station:
            return <Bus/>
    
        default:
             return <Location/>
    }
}
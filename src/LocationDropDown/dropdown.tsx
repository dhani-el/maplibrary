
import { useEffect } from "react";
import { LocationDropdownProps,ALocationDropdownProps } from "./interface";


export default function LocationDropdown({locations}:LocationDropdownProps){
    useEffect(function(){
        console.log("locations",locations);
        
    })

    return <div> 
                {
                    locations?.map(function(aLocation){
                        return <Alocation formatted_address={aLocation.formatted_address} type={aLocation.type} />
                    })
                }
            </div>
}

function Alocation({formatted_address,type}:ALocationDropdownProps){
    return <div>
            <p>{formatted_address}</p>
            <p>{type}</p>
    </div>
}
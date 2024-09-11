import { useEffect, useState } from "react"
import "./style.scss"
import { SearchBarComponentProps } from "./interface";

export default  function SearchBarComponent({mapKey,exposeResult}:SearchBarComponentProps){
    const [inputValue,setInputValue] = useState<string>('');

    function handleChange(value:string|number){
        const parsedValue  =  String(value);
        setInputValue(()=>parsedValue);
    }
    async function processAddress(adress:string){
        if(adress.length>0){
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=${mapKey}`)
            .then(function(raw){
                return raw.json()
            }).then((results)=>{
                exposeResult(results.results);
                return results;
            }).catch((error)=>{
                console.log(error);
                
            })}
    }

    useEffect(()=>{
      const timeout =  setTimeout(() => {
            processAddress(inputValue);
        }, 1500);

        return ()=>{
            clearTimeout(timeout)
        }
    },[inputValue])

    return <div id="search-bar-container">
                <input id="search-bar-input" value={inputValue} onChange={(e)=>{handleChange(e.target.value)}} />
            </div>
}

// fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${AutoLocation?.lat},${AutoLocation?.lng}&key=${mapkey}`)
// map key AIzaSyCGvCxKjSzfDtVS6fxJTUEeUXDI_UaDxGM 
//  map id  de861107584712d2

export enum locationTypes{
    default ="default",
    street_address ="street_address ",
    floor = "floor", 
    establishment = "establishment",
    landmark = "landmark", 
    parking = "parking", 
    post_box = "post_box", 
    postal_town = "postal_town", 
    room = "room", 
    street_number = "street_number",
    bus_station = "bus_station",
    train_station = "train_station", 
    transit_station = "transit_station", 
    neighborhood = "neighborhood", 
    premise = "premise",
    subpremise = "subpremise", 
    plus_code = "plus_code",
    postal_code = "postal_code", 
    natural_feature = "natural_feature",
    airport = "airport",
    point_of_interest = "point_of_interest", 
    multiple="multiple"
}

export interface ALocationDropdownProps{
    formatted_address:string,
    type: locationTypes
}

export interface LocationDropdownProps{
    locations:ALocationDropdownProps[]
}



import camelize from "camelize";
import { locations } from "./LocationMock";

export const locationRequest = (request)=>{
    return new Promise((resolve,reject)=>{
        const locationMock = locations[request];
        if (!locationMock){
            reject('Not Found');
        }
        else{
            resolve(locationMock);
        }
    })
}

export const locationTransform = (result)=>{
    const {geometry = {}} = camelize(result.results)[0];
    const {lat, lng} = geometry.location;
    return {lat, lng, viewport: geometry.viewport};
}
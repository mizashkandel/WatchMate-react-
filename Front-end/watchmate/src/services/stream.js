import{API_BASE_URL} from "../commons/api"

export const listStream =  async() => {
    try{
        const response = await fetch(API_BASE_URL+"/stream/");
        if (!response.ok){
            throw new Error(`Response status : ${response.status}`);
        }
    
        const stream = await response.json();
        return stream
    }catch (error){
        console.error
    }
}

  export const createStream = async (StreamData) =>{
    try{
        const response = await fetch(API_BASE_URL + '/stream/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(StreamData),
        });
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);

        }
        const stream = await response.json();
        return stream
    } catch (error) {
        console.error(error.message)
    }
}

    export const updateStream = async (StreamID, StreamData) =>{
        try{
        const response = await fetch(API_BASE_URL + `/${streamID}/`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(StreamData),
        });
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const stream = await response.json();
        return stream
    } catch (error) {
        console.error(error.message)
    }
}

export const deleteMovie = async (streamID) =>{
try{
const response = await fetch(API_BASE_URL + `/${streamID}/`,{
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }})
if(!response.ok){
    throw new Error(`Response status: ${response.status}`);
}
} catch (error) {
console.error(error.message)
}
}
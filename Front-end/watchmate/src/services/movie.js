import{API_BASE_URL} from "../commons/api"

export const listMovies =  async() => {
    try{
        const response = await fetch(API_BASE_URL+"/list");
        if (!response.ok){
            throw new Error(`Response status : ${response.status}`);
        }
    
        const movies = await response.json();
        return movies
    }catch (error){
        console.error
    }
}

  export const createMovie = async (MovieData) =>{
    try{
        const response = await fetch(API_BASE_URL + '/list/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(MovieData),
        });
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);

        }
        const movie = await response.json();
        return movie
    } catch (error) {
        console.error(error.message)
    }
}

    export const updateMovie = async (MovieData) =>{
        try{
        const response = await fetch(API_BASE_URL + `${movie.id}/`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(MovieData),
        });
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const movie = await response.json();
        return movie
    } catch (error) {
        console.error(error.message)
    }
}

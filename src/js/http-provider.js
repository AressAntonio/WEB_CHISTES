const jokeUrl='https://api.chucknorris.io/jokes/random';

//centralizar peticiones.
const obtenerchiste = async()=>{
    try{
        const resp = await fetch(jokeUrl);
        if(!resp.ok) throw 'No se puede realizar';
        const {icon_url, id, value} = await resp.json();
        return {icon_url, id, value};
    }catch (error){
        throw error;
    }
};

export{
    obtenerchiste,
}
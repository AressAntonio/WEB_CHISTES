
import { obtenerchiste } from './js/http-provider';
import './styles.css';
import {init} from "./js/jokes-page";

const jokeUrl='https://api.chucknorris.io/jokes/random';

fetch(jokeUrl).then(resp=>{
    console.log(resp);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//accediendo a la informacion del api
fetch(jokeUrl).then(resp=>{
    resp.json().then(({id, value})=>{
        console.log(id);
        console.log(value);

    });
});
/////////////////////////////////////////////////////////////////////////////////////
//cadena de promesas(simplificar codigo,encadenar las promesas_evitar_Promise Hell)
fetch(jokeUrl)
    .then(resp=>resp.json())
    .then(({id, value})=>{
        console.log(id, value);
    });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//cambios necesarios para el centralizado de http-provider.js
obtenerchiste().then(console.log);

init();
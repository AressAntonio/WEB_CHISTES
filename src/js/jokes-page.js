import { obtenerchiste } from "./http-provider";

//codigo para visualizar elementos dentro de index.html
const body = document.body;
let btnAnother, olList;

const crearchisteHtml = ()=>{
    const html=`
    <h1 class="mt-5">Jokes</h1>
    <br>
    <button class="btn btn-primary">Another Joke</button>
    <ol class="mt-2 list-group">
    </ol>
    `;
    const divChistes = document.createElement('div');
    divChistes.innerHTML=html;
    body.append(divChistes);
};
/*export const init = ()=>{
    crearchisteHtml();
};*/

const eventos = ()=>{
    olList = document.querySelector('ol');
    btnAnother = document.querySelector('button');

    btnAnother.addEventListener('click', async()=>{
        btnAnother.disabled = true;
        drawJoke(await obtenerchiste());
        btnAnother.disabled = false;
    });
};
const drawJoke = (joke)=>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${joke.id}</b>: ${joke.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
};
export const init = ()=>{
    crearchisteHtml();
    eventos();
};
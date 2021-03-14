import Observer from "./Observable"
import {renderizarMembro, renderizarBoxMembro} from "./renderizarMembro"
import {buscarMembros} from "./fetchData"


buscarMembros()
.then(json => {
    json.forEach(member  => renderizarMembro(member, 'append'))
})

// const input = document.querySelector('.js-input');
// const p1 = document.querySelector('.js-p1');
// const p2 = document.querySelector('.js-p2');
// const p3 = document.querySelector('.js-p3');

// const updateP1 = text => p1.textContent = text;
// const updateP2 = text => p2.textContent = text;
// const updateP3 = text => p3.textContent = text;

const observer = new Observer();
      observer.subscribe(renderizarBoxMembro)
// headingsObserver.subscribe(updateP1);
// headingsObserver.subscribe(updateP2);
// headingsObserver.subscribe(updateP3);

// input.addEventListener('keyup', e => {
//     headingsObserver.notify(e.target.value)
// })


const haldleChecked = () => {
    const gridMembors = document.querySelector('.grid__membros')
    
        gridMembors.addEventListener('click', event => {
            if(event.target.className === 'checkded__member') {
                observer.notify(JSON.parse(event.target.getAttribute('data-json')), 'prepend');
            }
        })
}

// const input = document.querySelector('.js-input');
// const p1 = document.querySelector('.js-p1');
// const p2 = document.querySelector('.js-p2');
// const p3 = document.querySelector('.js-p3');

// const updateP1 = text => p1.textContent = text;
// const updateP2 = text => p2.textContent = text;
// const updateP3 = text => p3.textContent = text;

// const headingsObserver = new Observer();

// headingsObserver.subscribe(updateP1);
// headingsObserver.subscribe(updateP2);
// headingsObserver.subscribe(updateP3);

// input.addEventListener('keyup', e => {
//     headingsObserver.notify(e.target.value)
// })



document.addEventListener('DOMContentLoaded', () => {
    haldleChecked()
});
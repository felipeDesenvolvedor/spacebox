import Observer from "./Observable"
import {renderizarMembro, renderizarBoxMembro, insertedFirst} from "./renderizarMembro"
import {buscarMembros} from "./fetchData"

const observer = new Observer();
      observer.subscribe(renderizarBoxMembro)
      observer.subscribe(insertedFirst)

buscarMembros()
.then(json => {
    json.forEach(member  => renderizarMembro(member, 'append'))
})
.then(() => {
    const member = document.querySelector(".grid-member:nth-child(1) .checkded__member")
    observer.notify(JSON.parse(member.getAttribute('data-json')));
    const checkedFirst = document.querySelector(".grid-member:nth-child(2) .checkded__member");
    checkedFirst.setAttribute('checked', true);  
})

const checked = event => {

    const checkeds = document.querySelectorAll(".grid-member:nth-child(1n + 2) .checkded__member");

    checkeds.forEach(checked => {
        checked.removeAttribute('checked');
    })

    event.target.setAttribute('checked', true);
}

const handleChecked = () => {
    const gridMembors  = document.querySelector('.grid__membros')
           
        gridMembors.addEventListener('click', event => {
            if(event.target.className === 'checkded__member') {
                
                checked(event)
                observer.unsubscribe(insertedFirst)
                observer.notify(JSON.parse(event.target.getAttribute('data-json')));
            }
        })

        gridMembors.addEventListener('change', event => {
            if(event.target.className === 'checkded__member' && event.target.checked) {
                
                checked(event)
                observer.unsubscribe(insertedFirst)
                observer.notify(JSON.parse(event.target.getAttribute('data-json')));
            }
        })
}

const menuAmburguer = () => {
    document.querySelector('.js__amburguer').addEventListener('click', () => {

        document.body.classList.toggle('amburguer--aberto')
        
    })
}

document.addEventListener('DOMContentLoaded', () => {
    
    handleChecked()
    menuAmburguer()
});
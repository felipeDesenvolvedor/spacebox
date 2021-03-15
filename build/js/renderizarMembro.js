const renderizarMembro = ({id, foto, nome, cargo, idade}, posicao) => {
    const gridMembros = document.querySelector('.grid__membros');
    const jsonData  = {'id':id, 'foto':foto, 'nome':nome, 'cargo':cargo, 'idade':idade};

    const membro = document.createElement('div')
          membro.setAttribute('class', 'grid-member')

    const boxFoto = document.createElement('div')
    const boxDados = document.createElement('div')

    const checkbox = document.createElement('input')
          checkbox.setAttribute('name', 'radio')
          checkbox.setAttribute('type', 'radio') 
          checkbox.setAttribute('class', 'checkded__member')
          checkbox.setAttribute('data-json', JSON.stringify(jsonData))  
    
    const idMembro    = document.createElement('span');
          idMembro.textContent = id;  
    
    const fotoMembro  = document.createElement('img');
          fotoMembro.setAttribute('src', `./assets/img/${foto}`);
          fotoMembro.setAttribute('class', 'foto');  
          
    const nomeMembro  = document.createElement('span');
          nomeMembro.textContent = nome;

    const cargoMembro = document.createElement('span');
          cargoMembro.textContent = cargo;

    const idadeMembro = document.createElement('span');
          idadeMembro.textContent = idade;


    boxFoto.appendChild(idMembro)
    boxFoto.appendChild(fotoMembro)

    boxDados.appendChild(nomeMembro)
    boxDados.appendChild(cargoMembro)
    boxDados.appendChild(idadeMembro)

    membro.appendChild(boxFoto)
    membro.appendChild(boxDados)
    membro.appendChild(checkbox);

    
      if (posicao == 'prepend') {
            gridMembros.prepend(membro);
            return;  
      }

      gridMembros.appendChild(membro);   
}

const renderizarBoxMembro = ({id, foto, nome, cargo, idade}) => {
      const gridMemberOne = document.querySelector('.grid-member') 
            gridMemberOne.remove()
            
      renderizarMembro({'id':id, 'foto':foto, 'nome':nome, 'cargo':cargo, 'idade':idade}, 'prepend');    
}

const insertedFirst = ({id, foto, nome, cargo, idade}) => {   
      renderizarMembro({'id':id, 'foto':foto, 'nome':nome, 'cargo':cargo, 'idade':idade}, 'prepend');    
}

export {renderizarMembro, renderizarBoxMembro, insertedFirst};
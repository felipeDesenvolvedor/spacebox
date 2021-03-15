const renderizarMembro = ({id, foto, nome, cargo, idade}, posicao) => {
    const gridMembros = document.querySelector('.grid__membros');
    const jsonData  = {'id':id, 'foto':foto, 'nome':nome, 'cargo':cargo, 'idade':idade};

    const membro = document.createElement('div')
          membro.setAttribute('class', 'grid-member')

    const boxFoto = document.createElement('div')
    const boxDados = document.createElement('div')

    const label = document.createElement('label')
          label.setAttribute('for', `member-${id}`)  

    const checkbox = document.createElement('input')
          checkbox.setAttribute('name', 'radio')
          checkbox.setAttribute('type', 'radio') 
          checkbox.setAttribute('class', 'checkded__member')
          checkbox.setAttribute('id', `member-${id}`)
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

    const nomeLabel  = document.createElement('span');
          nomeLabel.textContent = "Nome";

    const cargoLabel = document.createElement('span');
          cargoLabel.textContent = "Cargo";

    const idadeLabel = document.createElement('span');
          idadeLabel.textContent = "idade";      


    boxFoto.appendChild(idMembro)
    boxFoto.appendChild(fotoMembro)

    boxDados.appendChild(nomeLabel)
    boxDados.appendChild(nomeMembro)
    boxDados.appendChild(cargoLabel)
    boxDados.appendChild(cargoMembro)
    boxDados.appendChild(idadeLabel)
    boxDados.appendChild(idadeMembro)

    label.appendChild(boxFoto)
    label.appendChild(boxDados)


    membro.appendChild(checkbox);
    membro.appendChild(label)

    
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
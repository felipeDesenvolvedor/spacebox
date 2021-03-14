const buscarMembros = () => {
    return fetch('http://localhost:3001/')
    .then(response => {
        return response.json()
    })
    .then(json => {
        return json
    })
}

export {buscarMembros}
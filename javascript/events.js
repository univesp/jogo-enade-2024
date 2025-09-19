
// const uri = '../../../nao-se-cale/api/v1/numero-de-inscritos'
const uri = 'https://apps.univesp.br/recurso-educacional-aberto/contador/enade'
let req = new Request(uri, {
    method: 'GET',
    mode: 'cors'
});

let inscritos = document.getElementById('inscritos')


let envia = function(){
    fetch(req,
        {headers : 
            { 'Content-Type': 'application/json','Accept': 'application/json'},
        })
    .then((response) => {
        if (response.ok) {
            return response.json()
        } 
        else {
            throw new Error('BAD HTTP :(');
        }
    }).then((jsonData) => {
        inscritos.innerHTML = inscritos.innerHTML + jsonData
    })
}

envia()

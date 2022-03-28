const BRAKING_BAD_API_URL = 'https://www.breakingbadapi.com/api/characters';

var request = new XMLHttpRequest();

request.open('GET', BRAKING_BAD_API_URL, true);

request.onload = function () {
    var characters = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400) {
        characters.forEach(character => {
            var outputElementoGeral = document.querySelector("#outputListaPessoa");
            outputElementoGeral.insertAdjacentHTML('beforeend', `<a href='#listaPessoa${character.char_id}' aria-controls="listaPessoa${character.char_id}" data-toggle='list' role='tab' class='list-group-item list-group-item-action' id='outputLinhaNome${character.char_id}'"><h6>${character.name}</h6></a>`);

            var outputElementoGeral = document.querySelector("#outputDadoGeral");
            outputElementoGeral.insertAdjacentHTML('beforeend', `<ul class='list-group tab-pane fade' id='listaPessoa${character.char_id}' role="tabpanel"><li class='list-group-item list-group-item-action'><img src="${character.img}" alt="${character.name}" width="250" height="350"></li><li class='list-group-item list-group-item-action'><strong>Nome:</strong> ${character.name}</li><li class='list-group-item list-group-item-action'><strong>Apelido:</strong> ${character.nickname}</li><li class='list-group-item list-group-item-action'><strong>Data de aniversário (padrão mm-dd-aaa):</strong> ${character.birthday}</li><li class='list-group-item list-group-item-action'><strong>Ocupação(ões):</strong> ${character.occupation}</li><li class='list-group-item list-group-item-action'><strong>Estado:</strong> ${character.status}</li><li class='list-group-item list-group-item-action'><strong>Aparições (temporada):</strong> ${character.appearance}</li><li class='list-group-item list-group-item-action'><strong>Ator:</strong> ${character.portrayed}</li><li class='list-group-item list-group-item-action'><strong>Categoria(s):</strong> ${character.category}</li></ul><br>`);
        });
    }
}

request.send()
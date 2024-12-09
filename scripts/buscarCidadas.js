function getCityNameByState(id){
    const estadoId = id

    var request = $.ajax({
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/distritos`,
        method: 'GET',
        dataType: 'json'
    })

    request.done(function(data){
        $('.state-list').empty();
        data.forEach(item => {
            $('.state-list').append(`<li>${item.nome}</li>`)
        })
    })

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus)
    })
}

function getUfsName(){
    var request = $.ajax({
       url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
       method: "GET",
       dataType: "json",
       })

   request.done(function(data){
       $('.state-list').empty();
       data.forEach(item => {
           $('.state-list').append(`<li id="stateId" onclick="getCityNameByState(${item.id})">${item.nome}</li>`);
       })
   })
   request.fail(function(jqXHR, textStatus) {
       alert("Request failed: " + textStatus)
   })
}

window.onload = getUfsName;
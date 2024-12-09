function getUfsName(){
    var request = $.ajax({
       url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
       method: "GET",
       dataType: "json",
       })

   request.done(function(data){
       $('.state-list').empty();
       data.forEach(item => {
           $('.state-list').append(`<li>${item.nome}</li>`);
           console.log(item.id)
       })
   })
   request.fail(function(jqXHR, textStatus) {
       alert("Request failed: " + textStatus)
   })
}

function getUfsNameByRegion(button){
   const macrorregiao = button.value

   var request = $.ajax({
       url: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${macrorregiao}/estados`,
       method: 'GET',
       dataType: 'json'
   })

   request.done(function(data){
       console.log(data)
       $('.state-list').empty();
       data.forEach(item => {
           $('.state-list').append(`<li class="list-style">${item.nome}</li>`)
       })
   })

   request.fail(function(jqXHRm, textStatus) {
       alert("Request failed: " + textStatus)
   })
}

window.onload = getUfsName;
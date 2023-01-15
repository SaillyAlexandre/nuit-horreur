// XMLHttpRequest
// Intanciation

var xhr = new XMLHttpRequest();
// reception : open(method, url, asych)
xhr.open('GET', 'test.json', true);


var btn = document.getElementById('btn');
 var test = document.getElementById('para');
btn.addEventListener('click', function(){
    xhr.onload = function(){
        var donnee = JSON.parse(xhr.responseText);
        //on recupére les données du dossier test.json
        console.log(donnee);
        render(donnee);
        
    } 
    xhr.send()
    
})

function render(data){
    for (let index = 0; index < data.length; index++) {
        var doneeString = `<p>l'eleve §{data[index].nom} dont l'identifiant es §{data[index].id} a pour ecole §{data[index].ecole}</p>`;
        
    }
    test.insertAdjacentHTML('beforeend', doneeString);
}

const img = document.getElementById('img');

fetch('https://api.thecapti.com/v1/images/search')
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
            img.src = data[0].url
        })
    } else {
        console.log('ERREUR');
        document.getElementById('erreur').innerHTML = "Erreur :("
    }
})
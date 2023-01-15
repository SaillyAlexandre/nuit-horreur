var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
       
        handler(this.response);
        console.log(this.response, typeof this.response);
        var img = document.getElementById('img');
        var url = window.URL || window.webkitURL;
        img.src = url.createObjectURL(this.response);
    }
}
xhr.open("GET", "async/"+fichier, true);
xhr.responseType = 'blob';
xhr.send();  
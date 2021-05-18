
function addDivs() {
    container = document.getElementById("container");
        
    n = 0;
    size = 9;
    while (n < size)
    {
        var div = document.createElement('div');
        div.className = 'box';
        div.addEventListener("click", function()
        {
            clickScript(this.id);
        });
        div.id = 'div' + parseInt(n+1);
        container.appendChild(div); 
        n++;
    }
}

function clickScript(id)
{   
    var id_number = id.match(/\d+/g); // tar inn id, og fjerner alt som ikke er tall
    alert("Klikket i rute nr: " + id_number);
}

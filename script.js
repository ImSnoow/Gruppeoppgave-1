
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
    alert("Klikket i rute nr: " + id);
}

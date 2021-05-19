
function addDivs() {
    container = document.getElementById("container");
        
    size = 9;
    for (n = 0; n < size; n++)
    {
        var div = document.createElement('div');
        div.className = 'box';
        div.id = 'div' + parseInt(n+1);
        container.appendChild(div); 
    }
}

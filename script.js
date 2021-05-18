
function addDivs() {
    container = document.getElementById("container");
        
    n = 0;
    size = 9;
    while (n < size)
    {
        var div = document.createElement('div');
        div.className = 'box';
        div.id = 'div' + parseInt(n+1);
        container.appendChild(div); 
        n++;
    }
}

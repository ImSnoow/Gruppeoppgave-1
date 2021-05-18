var previousItemID;
var previousColor;

size = 3;

clickedCounter = [];


const colors = {

    pink: '#FFC0CB',
    blue: '#0000FF',
    green: '#00FF00'
}


function addDivs() {
    container = document.getElementById("container");
    var n = 0;

    for (x = 0; x < size; x++)
    {
        for (y = 0; y < size; y++)
        {
            var div = document.createElement('div');
            div.className = 'box';


            div.addEventListener("click", function()
            {
                clickScript(this.id);
            });

            div.style.backgroundColor = getColorFromYPos(n+1);
            div.id = 'div' + parseInt(n+1);
            container.appendChild(div);

            clickedCounter.push(0);
            
            
            n++;            
        }
    }   
}




function getColorFromYPos(arg)
{
    var _size = size*size;

    if (arg <= _size/3)
    {
        return colors.pink;
    }
    else if (arg > _size/3 && arg <= _size - (_size/3))
    {
        return colors.blue;
    }
    else
    {
        return colors.green;
    }
}




function clickScript(id)
{   
    var id_number = id.match(/\d+/g); // tar inn id, og fjerner alt som ikke er tall
    swapColor(id, id_number-1);
}




function swapColor(id, id_number)
{
    var box;
 
    clickedCounter[id_number] += 1;
       

    if (previousItemID != null)
    {
        box = document.getElementById(previousItemID);
        box.style.backgroundColor = previousColor;        
    }

    box = document.getElementById(id);
    box.textContent = clickedCounter[id_number]; 
    

    previousColor = box.style.backgroundColor;
    previousItemID = id;
    
    
    box.style.backgroundColor = "red";    
    
}

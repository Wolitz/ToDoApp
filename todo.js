function onClick() {
    var add = document.getElementById("myText").value;
    const dateInput = document.getElementById('myDate');
    var li = document.createElement('li'); 
    var hone = document.createElement('h1');
    var text = document.createElement('p'); 
    var date = document.createElement('input');
    date.type = 'date';
    date.value  = dateInput;
    var but = document.createElement('button');

    but.style.cssText += 'text-align:right;background-color: red; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; border-radius: 12px;';

    hone.appendChild(document.createTextNode("To-Do:"));
    text.appendChild(document.createTextNode(add));
    date.appendChild(document.createTextNode( date.value));
    but.appendChild(document.createTextNode("remove"));

    li.appendChild(hone); 
    li.appendChild(text);
    li.appendChild(date);
    li.appendChild(but);

    var ul = document.querySelector('ul');
    ul.appendChild(li); 
}




function Delete(){
    
}


// Get the elements by their ID
var popupLink = document.getElementById("button");
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");
// Show the pop-up window when the link is clicked
popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
});
// Hide the pop-up window when the close button is clicked
closeButton.addEventListener("click", function() {
    onClick();
    popupWindow.style.display = "none";
});
    
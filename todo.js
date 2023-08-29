function onClick(){
    var add = document.getElementById("myText").value;
    var node = document.createElement('li');
    var but = document.createElement('button');

    but.style.cssText += ' background-color: red;border: none;color: white;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;border-radius: 12px;';
    


    node.appendChild(document.createTextNode(add));
    but.appendChild(document.createTextNode('-'));


    document.querySelector('ul').appendChild(node); 
    document.querySelector('ul').appendChild(but); 

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
    
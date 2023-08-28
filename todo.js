function onClick(){
    var add = document.getElementById("myText").value;
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(add));
    
    document.querySelector('ul').appendChild(node); 
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
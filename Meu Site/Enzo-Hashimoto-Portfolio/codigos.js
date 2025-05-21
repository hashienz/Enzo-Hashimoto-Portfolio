document.addEventListener("mousemove", function(event) {
    let lightElement = document.getElementById("light");
    if (!lightElement) {
        lightElement = document.createElement("div");
        lightElement.id = "light"; 
        document.body.appendChild(lightElement);
    }


    lightElement.style.left = event.pageX + "px";
    lightElement.style.top = event.pageY + "px";
});
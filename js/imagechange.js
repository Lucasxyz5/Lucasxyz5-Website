pic = document.getElementById("my_picture");
pic.addEventListener("click", function(){ 
    if (!pic.src.endsWith("images/amber.jpg")) {
        pic.src = "images/amber.jpg";
    } else {
        pic.src = "images/selfie.jpg";
    }
 });
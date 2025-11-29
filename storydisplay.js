back = document.getElementById("backbutton");
forward = document.getElementById("forwardbutton");
current = document.getElementById("story");
const stories = ["stories/story1.txt", "stories/story2.txt"];
const length = 1;
pos = 0;

back.addEventListener("click", function(){ 
    pos -= 1;
    if (pos < 0) {
        pos = length;
    }
    current.src = stories[pos];
 });
forward.addEventListener("click", function(){ 
    pos += 1;
    if (pos > length) {
        pos = 0;
    }
    current.src = stories[pos];
 });
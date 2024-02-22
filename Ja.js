

var a = document.querySelector("h1")
var b = document.querySelector("#btn1")
// var c = document.querySelector("#btn2")


var flag = 0;


b.addEventListener('click',function(){
    if (flag == 0) {
        a.innerHTML="Friends"
        b.innerHTML="Remove"
        // a.style.backgroundColor=
        // b.style.backgroundColor="green"
        flag = 1;
    } else {
        a.innerHTML="Stranger"   
        b.innerHTML="Add Friend"
        // b.style.backgroundColor="red"
        flag = 0;
    }

})

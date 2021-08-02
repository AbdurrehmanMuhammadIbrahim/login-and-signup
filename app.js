let signup =()=>{
    var a = document.getElementById("email").value
    var b= document.getElementById("pass").value
    localStorage.setItem("email",a)
localStorage.setItem("pass",b)
window.location.href="./home.html"

}
let signin = () =>{
    var a = document.getElementById("email").value
    var b= document.getElementById("pass").value
    if ( a == localStorage.getItem("email")&& b==localStorage.getItem("pass")){
        window.location.href="./home.html"
    }
}

// let signin = () =>{
//     var a = document.getElementById('email').value
//     var b = document.getElementById('pass').value
// if(a===localStorage.getItem("email")&& b===localStorage.getItem("pass")){
//     window.location.href = "./home.html"
// }






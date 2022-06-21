document.querySelector('#btn').addEventListener('click', ()=>{
    myText()
})

function myText(){
    let message, text;
    let errElement = document.getElementById("email")
    message = document.getElementById("password");
    var password = document.querySelector('#password').value
    if(password.length < 8){
        alert('parol 8ta belgidan kam bo\'lishi mumkin emas!!!')
        
    }
}
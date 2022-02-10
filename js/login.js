document.getElementById('sub-btn').addEventListener('click',function(){
    const userEmail=document.getElementById('email-field');
    const email=userEmail.value;

    const userPass=document.getElementById('pass-field');
    const pass=userPass.value;

    if(email=="miforbd@gmail.com" && pass=="miforbd"){
        window.location.href="inside.html"
    }
})
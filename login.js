// btn=document.getElementById("btn");
// btn.addEventListener("click",validate(display));
function validate(callback){
        let un=document.getElementById("uname");
    let pwd=document.getElementById("pwd");
    let valid1=false;
    let valid2=false;
    if (un.value==="admin"&&pwd.value==="12345"){
        // alert("wnet to callback");
        callback();
        return false;
    }
    else{
        alert("Recheck your details");
        return true;
        // e.preventDefault();
    }
}

function display()
{
    window.location="list.html";
    // alert("inside callback");
    // window.location.assign("list.html");
    return true;
}


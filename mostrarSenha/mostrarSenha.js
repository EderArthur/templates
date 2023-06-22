const  componenteDeSenha = document.querySelector(".password-field")
let showpass = false;

componenteDeSenha.addEventListener("click", (e)=> {
    if (e.target.dataset.showpass !== undefined) {
        const field = e.target.previousElementSibling;
        showpass = !showpass;
        e.target.parentElement.classList.toggle("show-pass");
        if (showpass){
            field.type = "text";
        } else{
            field.type = "password";
        }
        field.focus();

    }
});
function Validar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;

    if(!email || !senha){
        alert("campos de preenchimento obrigatório.favor preencher");
    }else{
        alert("Campos preenchidos com sucesso!");
    }
}
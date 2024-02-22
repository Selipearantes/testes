

const buttonLogin = document.querySelector('#entrar');
const trocarSenha = document.querySelector('#trocarSenha');
const inputVapo = document.querySelector('#user');
const pass = document.querySelector('#password');
const spans = document.querySelector('.span')




function pegarUser() {

    var nomeDeUser = inputVapo.value;
    var passUser = pass.value;

    if (nomeDeUser.toLowerCase() === 'selipe' && passUser === '123') {
        spans.innerHTML = ('Olá, você está logado!');
        alert(`Logado com Sucesso! ${nomeDeUser}. Seja Bem-vindo!`);



    } else if (nomeDeUser.toLowerCase() === '' || passUser == '') {
        spans.innerHTML = ('Informe os dados a baixo!');
    }
    else {
        spans.innerHTML = (
            '<strong>Senha</strong> ou<strong> Usuário </strong>incorretos!');
    }
}

buttonLogin.addEventListener('click', pegarUser);

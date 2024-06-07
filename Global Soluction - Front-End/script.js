document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastro-form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            if (nome && email && senha) {
                alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}`);
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            if (email && senha) {
                alert(`Login realizado com sucesso!\nEmail: ${email}`);
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }
});

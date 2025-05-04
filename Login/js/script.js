const form = document.getElementById('loginForm');

form?.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const senha = document.getElementById('senha').value;

  if (nome === "admin" && senha === "admin") {
    window.location.href = 'x.html';
  } else {
    alert('Usuário não encontrado ou senha incorreta!');
  }
});



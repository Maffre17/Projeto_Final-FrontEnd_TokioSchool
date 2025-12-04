const input = document.getElementById('pessoas');
const btnMais = document.getElementById('mais');
const btnMenos = document.getElementById('menos');

btnMais.addEventListener('click', () => {
  let valorAtual = parseInt(input.value) || 0;
  if (valorAtual < parseInt(input.max)) {
    input.value = valorAtual + 1;
  }
});

btnMenos.addEventListener('click', () => {
  let valorAtual = parseInt(input.value) || 0;
  if (valorAtual > parseInt(input.min)) {
    input.value = valorAtual - 1;
  }
});

const hoje = new Date();

// Formata como YYYY-MM-DD (padrão do input type="date")
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // meses começam do 0
const dia = String(hoje.getDate()).padStart(2, '0');
const dataFormatada = `${ano}-${mes}-${dia}`;

// Define o mínimo como hoje
document.getElementById('date').setAttribute('min', dataFormatada);


const form = document.getElementById('reservation__form');
const popup = document.getElementById('popup');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // impede envio real
  form.reset(); // limpa o formulário

  // Mostra o pop-up
  popup.classList.add('show');

  // Oculta automaticamente depois de 3 segundos
  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
});
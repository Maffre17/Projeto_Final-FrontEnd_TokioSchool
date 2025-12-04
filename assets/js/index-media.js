document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title');
  const button = document.getElementById('button');
  const imagem = document.getElementById('banner__img');

  if (!title || !button || !imagem) {
    console.warn('Um ou mais elementos não foram encontrados:', {
      title: !!title,
      button: !!button,
      imagem: !!imagem
    });
    return;
  }

  // Guarda posições originais para restaurar depois
  const original = {
    titleParent: title.parentNode,
    titleNext: title.nextSibling,
    buttonParent: button.parentNode,
    buttonNext: button.nextSibling,
    imageParent: imagem.parentNode,
    imageNext: imagem.nextSibling
  };

  let caixa = null;
  let wrapper = null;

  function criarCaixaSeNecessario() {
    if (!caixa) {
      caixa = document.createElement('div');
      caixa.className = 'banner__div-title-button';
      // move os elementos (move, não clona)
      caixa.appendChild(title);
      caixa.appendChild(button);
      console.log('caixa criada e itens movidos para dentro dela');
    }
  }

  function criarWrapperEInserir() {
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.className = 'banner__wrapper';
      // substitui a imagem no DOM pelo wrapper, assim preservamos a posição original
      const imgParent = imagem.parentNode;
      imgParent.replaceChild(wrapper, imagem);
      // agora anexa imagem + caixa dentro do wrapper
      wrapper.appendChild(caixa);
      wrapper.appendChild(imagem);

      // assegura que a imagem esteja visível
      imagem.style.display = 'block';
      console.log('wrapper criado e inserido no lugar da imagem');
    }
  }

  function restaurarElemento(el, parent, nextSibling) {
    // insere na posição original (nextSibling pode ser null → appendChild)
    if (!parent) return;
    if (nextSibling) parent.insertBefore(el, nextSibling);
    else parent.appendChild(el);
  }

  function desfazerWrapper() {
    if (!wrapper) return;
    // move imagem de volta para sua posição original
    restaurarElemento(imagem, original.imageParent, original.imageNext);

    // move title e button de volta às suas posições originais
    restaurarElemento(title, original.titleParent, original.titleNext);
    restaurarElemento(button, original.buttonParent, original.buttonNext);

    // remove wrapper do DOM
    wrapper.remove();
    wrapper = null;

    // removemos caixa também para recriar na próxima vez (mais simples)
    if (caixa) {
      // caixa continua fora do DOM neste ponto (os elementos já foram movidos),
      // então apenas zera a referência para recriar depois
      caixa = null;
    }

    // opcional: esconder imagem em layouts mobile (se você quiser)
    imagem.style.display = ''; // limpa inline style para ficar sob controle do CSS
    console.log('layout restaurado para mobile');
  }

  function atualizarLayout() {
    const largura = window.innerWidth;
    // debug
    // console.log('largura', largura);

    if (largura >= 1024) {
      criarCaixaSeNecessario();
      criarWrapperEInserir();
    } else {
      desfazerWrapper();
    }
  }

  // primeira execução e on resize
  atualizarLayout();
  window.addEventListener('resize', atualizarLayout);
});

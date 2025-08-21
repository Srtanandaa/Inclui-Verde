const produtos = {
    sabaoEcologico: {
      nome: "Sabão Ecológico",
      img: "img/sabão.png",
      preco: "R$ 14,50",
      descricao:
        "Nosso sabão ecológico é feito com óleos vegetais reaproveitados, sem adição de produtos químicos agressivos. Ideal para limpeza geral, seguro para a natureza e para sua casa.",
      beneficios: [
        "Produzido com óleo vegetal reaproveitado",
        "Livre de químicos agressivos",
        "Seguro para pets e crianças",
        "Biodegradável e amigo da natureza",
        "Embalagem reciclável",
      ],
    },
    desinfetanteNatural: {
      nome: "Desinfetante Natural",
      img: "img/Desinfetante.png",
      preco: "R$ 18,90",
      descricao: "Limpeza eficaz sem agredir o meio ambiente.",
      beneficios: [
        "Livre de químicos tóxicos",
        "Aroma natural",
        "Seguro para superfícies diversas",
      ],
    },
    detergenteEcologico: {
      nome: "Detergente Ecológico",
      img: "img/detergente.png",
      preco: "R$ 10,90",
      descricao:
        "Uma escolha consciente para quem quer uma pia limpa e um planeta mais verde.",
      beneficios: [
        "Biodegradável e seguro",
        "Produzido por pequenos produtores locais",
        "Não agride o meio ambiente",
      ],
    },
    sabaoEmPo: {
  nome: "Sabão em pó",
  img: "img/sabao-em-po.png",
  preco: "R$ 29,90",
  descricao: "Ideal para todos os tipos de tecidos.",
  beneficios: [
    "Alta eficiência na limpeza",
    "Seguro para roupas delicadas",
    "Biodegradável"
  ]
},
pastilhaSanitaria: {
  nome: "Pastilha para vaso sanitário",
  img: "img/pastilha.png",
  preco: "R$ 10,00",
  descricao: "Limpeza prática e ecológica para o seu banheiro.",
  beneficios: [
    "Facilita a limpeza",
    "Biodegradável",
    "Aroma refrescante"
  ]
},
velasNaturais: {
    nome: "Velas Naturais",
    img: "img/vela outro.png",
    preco: "R$ 15,00",
    descricao: "Produzidas artesanalmente com cera vegetal.",
    beneficios: [
      "Artesanais",
      "Cera vegetal",
      "Aroma natural"
    ]
  },
  detergenteEcoComunidade: {
    nome: "Detergente Eco",
    img: "img/detergente outro.png",
    preco: "R$ 11,90",
    descricao: "Feito por pequenos produtores locais. Biodegradável.",
    beneficios: [
      "Produção local",
      "Biodegradável",
      "Alta qualidade"
    ]
  },
  buchaVegetal: {
    nome: "Bucha Vegetal",
    img: "img/bucha outro.png",
    preco: "R$ 8,50",
    descricao: "Alternativa natural e compostável às esponjas sintéticas.",
    beneficios: [
      "Compostável",
      "Natural",
      "Eficaz para limpeza"
    ]
  },
  saboneteNaturalComunidade: {
    nome: "Sabonete Natural",
    img: "img/sabonete outro.png",
    preco: "R$ 9,50",
    descricao: "Feito à mão com óleos vegetais e ervas, sem corantes artificiais. Ideal para peles sensíveis.",
    beneficios: [
      "Artesanal",
      "Ingredientes naturais",
      "Sem corantes artificiais"
    ]
  },
    sabaoLavanda: {
    nome: "Sabonete de Lavanda Ecológico",
    img: "img/sabao lavanda outro.png",
    preco: "R$ 12,00",
    descricao: "Sabonete suave que acalma a pele com o toque da lavanda.",
    beneficios: [
        "Acalma a pele",
        "Aroma relaxante de lavanda",
        "Ingrediente natural e ecológico"
    ]
},
escovaBambu: {
    nome: "Escova de Dentes de Bambu",
    img: "img/escova bambu outro.png",
    preco: "R$ 25,00",
    descricao: "Escova de dentes sustentável, com cabo de bambu ecológico.",
    beneficios: [
        "Cabo de bambu biodegradável",
        "Cerdas suaves para dentes e gengivas sensíveis",
        "Alternativa ecológica ao plástico"
    ]
},
sabaoNatural: {
    nome: "Sabonete Natural",
    img: "img/sabonete natural outro.png",
    preco: "R$ 12,80",
    descricao: "Sabonete artesanal, feito com ingredientes naturais e suaves para a pele.",
    beneficios: [
        "Ingredientes 100% naturais",
        "Hidratação profunda",
        "Sem aditivos químicos"
    ]
},
  sprayAromatic: {
    nome: "Spray Aromático Natural",
    img: "img/spray outro.png",
    preco: "R$ 13,00",
    descricao: "Perfuma o ambiente com óleos essenciais puros.",
    beneficios: [
      "Óleos essenciais puros",
      "Aroma suave",
      "Refresca o ambiente"
    ]
  }
};

function getParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function carregarProduto() {
  let id = getParam('id');
  if (!id || !produtos[id]) {
    document.querySelector('.pagina-produto').innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  const produto = produtos[id];

  document.getElementById('produto-img').src = produto.img;
  document.getElementById('produto-img').alt = produto.nome;
  document.querySelector('.produto-detalhes h1').textContent = produto.nome;
  document.querySelector('.produto-detalhes .preco').textContent = produto.preco;
  document.querySelector('.produto-detalhes .descricao').textContent = produto.descricao;

  const ul = document.querySelector('.beneficios ul');
  ul.innerHTML = "";
  produto.beneficios.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    ul.appendChild(li);
  });

  
 mostrarRelacionados(id);
}



function mostrarRelacionados(produtoAtualId) {
  const relacionadosContainer = document.querySelector(".card-container");
  relacionadosContainer.innerHTML = "";

  const chaves = Object.keys(produtos).filter((key) => key !== produtoAtualId);

  for (let i = chaves.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chaves[i], chaves[j]] = [chaves[j], chaves[i]];
  }

  const recomendados = chaves.slice(0, 3); 

  recomendados.forEach((id) => {
    const p = produtos[id];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.nome}" />
      <h3>${p.nome}</h3>
      <p>${p.preco}</p>
      <button onclick="window.location.href='produto.html?id=${id}'">Ver Produto</button>
    `;
    relacionadosContainer.appendChild(card);
  });
}

window.onload = carregarProduto;

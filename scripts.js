const imagem = document.querySelector(".Iphone")
const circulo = document.querySelector(".circulo")


function trocarImagem(endereco) {
    imagem.src = endereco
    imagem.classList.add("iphone-efeito")

       setTimeout(() => {
        imagem.classList.remove("iphone-efeito")
        
    }, 700);
}


function trocarFundo(cor) {
    circulo.style.background = cor
}
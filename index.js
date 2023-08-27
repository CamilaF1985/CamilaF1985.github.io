const h1Text = "Camila Fabbroni";
const h2Text = "Full Stack Java Developer";

const h1Element = document.getElementById("typewriter-h1");
const h2Element = document.getElementById("typewriter-h2");

let h1Index = 0;
let h2Index = 0;

function typeH1() {
    if (h1Index < h1Text.length) {
        h1Element.innerHTML += h1Text.charAt(h1Index);
        h1Index++;
        setTimeout(typeH1, 100);
    } else {
        typeH2();
    }
}

function typeH2() {
    if (h2Index < h2Text.length) {
        h2Element.innerHTML += h2Text.charAt(h2Index);
        h2Index++;
        setTimeout(typeH2, 100);
    }
}

typeH1();

  // Inicializar Fancybox para los elementos con atributo data-fancybox
  $('[data-fancybox]').fancybox({
    touch: false,
    animationEffect: "fade",
    thumbs: {
      autoStart: true, // Mostrar miniaturas automáticamente
      axis: "x" // Mostrar miniaturas en la parte inferior
    }
  });

  // Inicialización de Lightbox después de Fancybox
lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });

  $('[data-fancybox="gallery"]').fancybox({
    loop: true, // Permite el bucle infinito entre las imágenes
    thumbs: {
      autoStart: true // Muestra las miniaturas de las imágenes en la parte inferior
    }
  });
  
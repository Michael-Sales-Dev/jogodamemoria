let imagens = [];
for (let i = 1; i <= 8; i++) {
  imagens.push(`http://picsum.photos/id/${i}/250`);
}
let fundo = "https://picsum.photos/250?grayscale";
let cartas = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const onload = () => {
  let elemImages = document.querySelectorAll("#memoria img");
  elemImages.forEach((img, i) => {
    img.src = fundo;
  });
};

function ocultar() {
  document.getElementById("caixinhaText").style.display = "none";
}

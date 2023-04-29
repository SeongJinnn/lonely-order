const images = ['1.jpeg', '2.jpeg', '3.jpeg'];

const choseImages = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement('img');

bgimage.src = `img/${choseImages}`;

document.body.appendChild(bgimage);


const urls = [
    "https://ahmedelshinnawi.github.io/mock//Images/1.jpg",
     "https://ahmedelshinnawi.github.io/mock/Images/2.jpg",
     "https://ahmedelshinnawi.github.io/mock/Images/3.png",
     "https://ahmedelshinnawi.github.io/mock/Images/4.jpg",
    "https://ahmedelshinnawi.github.io/mock/Images/5.jpg",
     "https://ahmedelshinnawi.github.io/mock/Images/6.jpg",
     "https://ahmedelshinnawi.github.io/mock/Images/7.jpg",
     "https://ahmedelshinnawi.github.io/mock/Images/8.jpg",
     "https://ahmedelshinnawi.github.io/mock/Images/9.jpg",
    "https://ahmedelshinnawi.github.io/mock/Images/10.png",
    "https://ahmedelshinnawi.github.io/mock/Images/11.jpg",
    "https://ahmedelshinnawi.github.io/mock/Images/12.jpg"
];


const images = document.querySelector('.image');

for(let i = 0; i < urls.length; i++) {
    setTimeout(() => {
        const img = document.createElement('img');
        img.src = urls[i];
        img.width = 250;
        img.height = 250;
        images.appendChild(img);
    }, 1000 * i);

}
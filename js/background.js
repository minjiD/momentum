const images = [
    "img_01.jpg",
    "img_02.jpg",
    "img_03.jpg",
    "img_04.jpg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)]; //이미지 랜덤
const bgImage = document.createElement("img"); //이미지 요소 생성

bgImage.src = `../img/${chosenImage}`; //이미지 경로 설정
// console.log(bgImage);

document.body.appendChild(bgImage); //img태그 body에 추가
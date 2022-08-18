const API_KEY = "";

function onGeoOk(position) {
    // console.log(position); //JavaScript give you geolocation positon object
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    //fetch <- 개발자도구 -> Network에서 확인 가능
    //fetch는 약속이라고 할수있다.. 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어난다.
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //이것을 실행하면 브라우저에서 위치 좌표를 준다.
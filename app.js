const API_KEY = `efa3fe2cdd08d2c5cd0d0e48c1a701c6`;



const search = ()=>{
    const input = document.getElementById('input_filed').value;
    const url =`api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}
const apiKey = `efa3fe2cdd08d2c5cd0d0e48c1a701c6`;



const search = ()=>{
    const input = document.getElementById('input_filed').value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => temperature(data));
}

const sedTemperature =(id, text)=>{
    document.getElementById(id).innerText= text;
}

const temperature = (hotTemperature)=>{
    sedTemperature ('city', hotTemperature.name);
    sedTemperature ('temperature', hotTemperature.main.temp);
}
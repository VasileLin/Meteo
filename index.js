const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const video = document.getElementById("myVideo");

search.addEventListener('click', () => {
    const APIKey = '82a9b0d0c68c39857be759321ed9fc9b';
    const city = document.querySelector('.search-box input').value;
    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then
        (json => {
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                video.src = ''
                return;
            }
            
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png'
                    video.src = 'videos/clear.mp4'
                    video.play();
                    break;

                case 'Rain':
                    image.src = 'images/rain.png'
                    video.src = 'videos/rain.mp4'
                    video.play();
                    break;

                case 'Snow':
                    image.src = 'images/snow.png'
                    video.src = 'videos/snow.mp4'
                    video.play();
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png'
                    video.src = 'videos/clouds.mp4'
                    video.play();
                    break;

                case 'Haze':
                    image.src = 'images/haze.png'
                    video.src = 'videos/haze.mp4'
                    video.play();
                    break;

                default:
                    image.src=''
                    break;
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display='';
            weatherDetails.style.display ='';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        })
})

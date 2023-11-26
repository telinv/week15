const cities = ['Москва' , 'Лондон' , 'Токио' , 'Лиссабон', 'Париж', 'Мадрид'];
let temperatures = [];
for (let i = 0; i < cities.length; i++) {
    let temperature = parseFloat(prompt(`Введите температуру в городе ${cities[i]}:`));
    if (!isNaN(temperature)) {
        temperatures.push(temperature);
    } else {
        temperatures.push(NaN);
            }
        }
let citiesList = document.createElement('ul');
let maxTemperature = - Infinity;
let minTemperature = Infinity;
for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement('li');
    let temperatureInfo = isNaN(temperatures[i]) ? 'Нет данных' : `${temperatures[i]}°C`;
    listItem.textContent = `${cities[i]}: ${temperatureInfo}`;
    citiesList.appendChild(listItem);
    if (!isNaN(temperatures[i])) {
        maxTemperature = Math.max(maxTemperature, temperatures[i]);
        minTemperature = Math.min(minTemperature, temperatures[i]);
    }
}
document.body.appendChild(citiesList);
document.write(`<p>Максимальная температура составляет: ${maxTemperature}°C</p>`);
document.write(`<p>Минимальная температура составляет: ${minTemperature}°C</p>`);
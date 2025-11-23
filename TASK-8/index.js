async function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city.trim() === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const apiKey = "44ace65e2c2ac86de3e6ebba0e96cc07";  

    try {
        result.innerHTML = "<p>Loading...</p>";

        const response = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p><b>Temperature:</b> ${data.main.temp}°C</p>
            <p><b>Humidity:</b> ${data.main.humidity}%</p>
            <p><b>Condition:</b> ${data.weather[0].description}</p>
        `;

    } catch (error) {
        result.innerHTML = `<p style='color:red'>${error.message}</p>`;
    }
}

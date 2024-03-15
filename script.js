let city = "JAIPUR";
let state = "Rajasthan (RJ)";
let country = "India";


async function fetchData() {
  const CheckWeather = document.querySelector("#CheckWeather");
  const cityName = document.querySelector("#cityName");
  const countryName = document.querySelector("#countryName");
  const stateName = document.querySelector("#stateName");
  const Wcity = document.querySelector("#Weather-city");

  CheckWeather.addEventListener("click", () => {
    city = cityName.value;
    country = countryName.value;
    state = stateName.value;
    fetchData();
  });

  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}&state=${state}&country=${country}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "467e4628femsh4cb8e423a77533ep11e1f4jsn14334ebed2dd",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new error("new error found");
    } else {
      const result = await response.json(); // Parse response as JSON
      console.log(city);
      FeelsLike.innerText = result.feels_like;
      MinTemp.innerText = result.min_temp;
      MaxTemp.innerText = result.max_temp;
      Wcity.innerText=`${city}`
      temp.innerText=result.temp;
    }
  } catch (error) {
    console.error(error);
  }
}

// Call the async function to fetch data
fetchData();

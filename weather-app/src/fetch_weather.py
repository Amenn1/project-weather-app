import requests

# Replace with your OpenWeatherMap API key
api_key = "7b1c292911fa688a5bc4e39b56308db5"

# Replace with the city and country code you want to get weather data for
city_name = "Tunisia"
country_code = "AF"

# API endpoint URL
url = f"http://api.openweathermap.org/data/2.5/weather?q={city_name},{country_code}&appid={api_key}"

try:
    # Send a GET request to the API
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        data = response.json()
        # Extract relevant weather information
        temperature = data['main']['temp']
        description = data['weather'][0]['description']

        print(f"Weather in {city_name}, {country_code}:")
        print(f"Temperature: {temperature}°C")
        print(f"Description: {description}")
    else:
        print(f"Failed to fetch weather data. Status code: {response.status_code}")

except Exception as e:
    print(f"An error occurred: {str(e)}")




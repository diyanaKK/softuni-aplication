function attachEvents() {
    let locationName = document.getElementById('location').value;
    let button = document.getElementById('submit');
    let forecastSection = document.getElementById('forecast')

    let locations = {
        'London': 'london',
        'New York': 'ny',
        'Barcelona': 'barcelona'
    }

    button.addEventListener('click', getWeather);


    async function getWeather(ev) {
        //take current condition
        //structure 
        //{ 
        //   name: locationName,
        //   forecast: { low: temp,
        //               high: temp,
        //               condition: condition } 
        // }
        try {
            if (locations.hasOwnProperty(locationName)) {
                let code = locations[locationName]
                let urlForToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`

                const response = await fetch(urlForToday)
                const data = await response.json()


                let imgForcondition = ''
                switch (data.forecast) {
                    case 'Sunny': imgForcondition = `&#x2600;`; break;
                    case 'Partly sunny': imgForcondition = ` &#x26C5;`; break;
                    case 'Overcast': imgForcondition = `&#x2601;`; break;
                    case 'Rain': imgForcondition = `&#x2614;`; break;

                }

                //div for append all spans
                let divForAll = document.createElement('div')
                divForAll.classList = 'forecasts'
                divForAll.style.display = 'block'
                //span for img
                let spanImg = document.createElement('span')
                spanImg.classList = 'condition symbol'
                spanImg.textContent = imgForcondition
                divForAll.appendChild(spanImg)

                //span for all conditions for day
                let span = document.createElement('span')
                span.classList = 'condition'

                //span for name
                let name = document.createElement('span')
                name.classList = 'forecast-data'
                name.textContent = data.name
                span.appendChild(name)

                //span for degrees 
                let degrees = document.createElement('span')
                degrees.classList = 'forecast-data'
                degrees.textContent = data.forecast.low + '&#176;' + '/' + data.forecast.high + '&#176;'
                span.appendChild(degrees)
                //span for condition

                let spanCondition = document.createElement('span')
                spanCondition.classList = 'forecast-data'
                spanCondition.textContent = data.forecast.condition
                span.appendChild(spanCondition)
                divForAll.appendChild(span)
            }
        } catch {


        }


        //take for 3 days
        //structure
        //{ 
        //   name: locationName,
        //   forecast: [{ low: temp,
        //                high: temp,
        //                condition: condition }, … ] 
        // }

    }
}
attachEvents()
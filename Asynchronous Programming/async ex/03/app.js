function attachEvents() {
    let obj = {
        'New York': 'ny',
        'Barcelona': 'barcelona',
        'London': 'london'
    }

    const input = document.getElementById('location')


    let buttonGet = document.getElementById('submit')
    buttonGet.addEventListener('click', getWeather)


    async function getWeather(ev) {

        let location = obj[input.value]
        let urlForCurrent = `http://localhost:3030/jsonstore/forecaster/today/${location}`

        const response = await fetch(urlForCurrent);
        const data = await response.json()
        console.log(data);

        let divC = document.getElementById('current')
        let div = document.getElementById('forecast')
        div.style.display = 'block'

        let divclass = document.createElement('div')
        divclass.classList = 'forecasts'

        let spanWithImg = document.createElement('span')
        spanWithImg.classList = 'condition symbol'

        if (data.forecast.condition === 'Sunny') {
            spanWithImg.textContent = '☀'
        } else if (data.forecast.condition === 'Partly sunny') {
            spanWithImg.textContent = '⛅'
        } else if (data.forecast.condition === 'Overcast') {
            spanWithImg.textContent = '☁'
        } else if (data.forecast.condition === 'Rain') {
            spanWithImg.textContent = '☂'
        }
        divclass.appendChild(spanWithImg)
        let span = document.createElement('span')
        span.classList = 'condition'

        let spanLocation = document.createElement('span')
        spanLocation.classList = 'forecast-data'
        spanLocation.textContent = data.name

        span.appendChild(spanLocation)
        let spanTemperature = document.createElement('span')
        spanTemperature.classList = 'forecast-data'
        let temperature = data.forecast.low + '°' + '/' + data.forecast.high + '°'
        spanTemperature.textContent = temperature
        span.appendChild(spanTemperature)
        let spanCondition = document.createElement('span')
        spanCondition.classList = 'forecast-data'
        spanCondition.textContent = data.condition
        span.appendChild(spanCondition)
        divclass.appendChild(span)
        divC.appendChild(divclass)

        let urlFor3Days = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
        const responce2 = await fetch(urlFor3Days + location)
        const data2 = await responce2.json()
        console.log(data2);

        let divId = document.getElementById('upcoming')
        let divInf = document.createElement('div')
        divInf.classList = 'forecast-info'

        let spanClass = document.createElement('span')
        spanClass.classList = 'upcoming'

        let spanImg = document.createElement('span')
        spanImg.classList = 'symbol'
        if (data2.forecast[0].condition === 'Sunny') {
            spanImg.textContent = '☀'
        } else if (data2.forecast[0].condition === 'Partly sunny') {
            spanImg.textContent = '⛅'
        } else if (data2.forecast[0].condition === 'Overcast') {
            spanImg.textContent = '☁'
        } else if (data2.forecast[0].condition === 'Rain') {
            spanImg.textContent = '☂'
        }

        spanClass.appendChild(spanImg)
        let spanTm = document.createElement('span')
        spanTm.classList = 'forecast-data'
        let temperat = data2.forecast[0].low + '°' + '/' + data2.forecast[0].high + '°'
        spanTm.textContent = temperat
        spanClass.appendChild(spanTm)
        let spanC = document.createElement('span')
        spanC.classList = 'forecast-data'
        spanC.textContent = data2.forecast[0].condition
        spanClass.appendChild(spanC)

        divInf.appendChild(spanClass)


        //day2
        let divInfo = document.createElement('div')
        divInfo.classList = 'forecast-info'

        let spanClas = document.createElement('span')
        spanClas.classList = 'upcoming'

        let spanI = document.createElement('span')
        spanI.classList = 'symbol'
        if (data2.forecast[1].condition === 'Sunny') {
            spanI.textContent = '☀'
        } else if (data2.forecast[1].condition === 'Partly sunny') {
            spanI.textContent = '⛅'
        } else if (data2.forecast[1].condition === 'Overcast') {
            spanI.textContent = '☁'
        } else if (data2.forecast[1].condition === 'Rain') {
            spanI.textContent = '☂'
        }

        spanClas.appendChild(spanI)
        let spanT = document.createElement('span')
        spanT.classList = 'forecast-data'
        let temperatu = data2.forecast[1].low + '°' + '/' + data2.forecast[1].high + '°'
        spanT.textContent = temperatu
        spanClas.appendChild(spanT)
        let spanCon = document.createElement('span')
        spanCon.classList = 'forecast-data'
        spanCon.textContent = data2.forecast[1].condition
        spanClas.appendChild(spanCon)

        divInf.appendChild(spanClas)

        //day 3

        let spanCl = document.createElement('span')
        spanClas.classList = 'upcoming'

        let spanIn = document.createElement('span')
        spanIn.classList = 'symbol'
        if (data2.forecast[2].condition === 'Sunny') {
            spanIn.textContent = '☀'
        } else if (data2.forecast[2].condition === 'Partly sunny') {
            spanIn.textContent = '⛅'
        } else if (data2.forecast[2].condition === 'Overcast') {
            spanIn.textContent = '☁'
        } else if (data2.forecast[2].condition === 'Rain') {
            spanIn.textContent = '☂'
        }

        spanCl.appendChild(spanIn)
        let spanTe = document.createElement('span')
        spanTe.classList = 'forecast-data'
        let temp = data2.forecast[2].low + '°' + '/' + data2.forecast[2].high + '°'
        spanTe.textContent = temp
        spanCl.appendChild(spanTe)
        let spanCo = document.createElement('span')
        spanCo.classList = 'forecast-data'
        spanCo.textContent = data2.forecast[2].condition
        spanCl.appendChild(spanCo)

        divInf.appendChild(spanCl)
        divId.appendChild(divInf)

    }





}

attachEvents();
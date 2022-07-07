function solve() {
    let url = `http://localhost:3030/jsonstore/bus/schedule/`
    const banner = document.querySelector('#info span')
    let btnDepart = document.getElementById('depart')
    let btnArrive = document.getElementById('arrive')
    let stop = {
        next: 'depot'
    }
    async function depart() {
        try {
            let response = await fetch(url + stop.next)
            if (response.ok) {
                let data = await response.json()
                console.log(data);
                stop = data
                banner.textContent = `Next stop ${data.name}`
                btnDepart.disabled = true
                btnArrive.disabled = false
            }
        } catch (err) {
            banner.textContent = 'Error'
            departBtn.disabled = false
            arriveBtn.disabled = false
        }

    }

    function arrive() {
        btnDepart.disabled = false
        btnArrive.disabled = true
        banner.textContent = `Arriving at ${stop.name}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
function solve() {

    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')
    const banner = document.querySelector('#info span')

    let stop = {
        next: 'depot'
    }
    async function depart() {
        const url = ' http://localhost:3030/jsonstore/bus/schedule/' + stop.next;
        try{
        const response = await fetch(url)
        if(response.ok){
        const data = await response.json()
        console.log(data);
        stop = data
        departBtn.disabled = true
        arriveBtn.disabled = false
        banner.textContent = `Next stop ${stop.name}`
        }
        }catch(err){
            banner.textContent = 'Error'
            departBtn.disabled = false
            arriveBtn.disabled = false
        }

    }

    function arrive() {
        banner.textContent = `Arriving at ${stop.name}`
        departBtn.disabled = false
        arriveBtn.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
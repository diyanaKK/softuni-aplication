async function getInfo() {
    let busId = document.getElementById('stopId').value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    let button = document.getElementById('submit');
    let busLists = document.getElementById('buses');
    let stopName = document.getElementById('stopName');
    busLists.innerHTML= ''
try{
    let response = await fetch(url);
    let data = await response.json();

    stopName.textContent = data.name;

    Object.entries(data.buses).forEach(el => {
        let li = document.createElement('li');
        li.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`;
        busLists.appendChild(li)
    })
}catch(err){
    stopName.textContent = 'Error'
}
    
}
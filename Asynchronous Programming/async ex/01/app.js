  async function getInfo() {
   const input = document.getElementById('stopId');
const id = input.value;
   const url = 'http://localhost:3030/jsonstore/bus/businfo/' + id ;
try{
    const response = await fetch(url)
    const data = await response.json();
    document.getElementById('stopName').textContent = data.name;
    const ul =document.getElementById('buses')
    Object.entries(data.buses).map(([bus,time]) =>{
       const result =  document.createElement('li')
       result.textContent = `Bus ${bus} arrives in ${time}`;
ul.appendChild(result)
    })
}catch(error){
    document.getElementById('stopName').textContent = 'Error'
}
}
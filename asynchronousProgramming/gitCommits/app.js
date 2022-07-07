async function loadCommits() {
   let name = document.getElementById('username').value;
   let repo = document.getElementById('repo').value;
   let url = `https://api.github.com/repos/${name}/${repo}/commits`;

   let list = document.getElementById('commits');
list.innerHTML = '';
let response = await fetch(url)
let data = await response.json()
try{


if(response.ok){
    data.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element.commit.author.name+':'+ ' '+element.commit.message
        list.appendChild(li)
    });
}else{
    throw new Error(`Error: ${response.status} (Not Found)`)
}
}catch(err){
    
    let li = document.createElement('li');
    li.textContent = `${err.message}`
    list.appendChild(li)
}

}
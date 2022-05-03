async function loadCommits() {
    const username = document.getElementById('username').value
    const repo = document.getElementById('repo').value

    const url = `https://api.github.com/repos/${username}/${repo}/commits`
    let data;
    let response;
    let ulElement;
    try {
        response = await fetch(url)
        data = await response.json()
     ulElement = document.getElementById('commits')
        ulElement.innerHTML = ''

        if(response.ok) {
            data.forEach(r => {
                const liElement = document.createElement('li')
                liElement.textContent = `${r.commit.author.name}: ${r.commit.message}`
                ulElement.appendChild(liElement)
            });
        }else{
            throw new Error(`Error: ${response.status} (Not Found)`)
        }
    }
    catch (error) {
        const li = document.createElement('li')
        li.textContent = error.message
        ulElement.appendChild(li)
        console.log(error.message);
    }

}


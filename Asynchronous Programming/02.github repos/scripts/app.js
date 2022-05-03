function loadRepos() {
	const username = document.getElementById('username').value
	const url = `https://api.github.com/users/${username}/repos`;
	fetch(url)
		.then(response => {
			if (response.status == 400) {
				throw new Error('User not found');
			}
			console.log(response);
			return response.json()
		})
		.then(data => {
			const ulElement = document.getElementById('repos')
			ulElement.innerHTML = ''
			data.forEach(r => {
				const liElement = document.createElement('li')
				const a = document.createElement('a')
				liElement.textContent = r.full_name
				a.href = r.html_url
				liElement.appendChild(a)
				ulElement.appendChild(liElement)
			});
		})
		.catch(error => {
			console.log('error');
		})

}






async function loadReposFFF() {
	const username = document.getElementById('username').value
	const url = `https://api.github.com/users/${username}/repos`;

	try{
		const response = await fetch(url)
		console.log(response);
		const data = await response.json()
		console.log(`Promise fulfilled`);
		console.log(data);
	
		const ulElement = document.getElementById('repos')
		ulElement.innerHTML = ''
		data.forEach(r => {
			const liElement = document.createElement('li')
			const a = document.createElement('a')
			liElement.textContent = r.full_name
			a.href = r.html_url
			liElement.appendChild(a)
			ulElement.appendChild(liElement)
		});
	
	}catch(error) {
		console.log(`Promise rejected`);
		console.log('error');
	}

}
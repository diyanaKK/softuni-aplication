async function loadRepos() {
	let username = document.getElementById('username').value;
	let url = `https://api.github.com/users/${username}/repos`;
	let list = document.getElementById('repos')
	list.innerHTML = ''
	try{
		let response = await fetch(url)
	if (response.status === '400') {
		throw new Error('User not found');
	}
	let data = await response.json()
	console.log(data);
	data.forEach(e => {
		let li = document.createElement('li')
		let a = document.createElement('a')
		li.textContent = e.full_name
		a.href = e.html_url
		li.appendChild(a)
		list.appendChild(li)
		username.value = ''
	});
	}catch(err){
		console.log('error');
	}
	
}
async function lockedProfile() {
    let url = `http://localhost:3030/jsonstore/advanced/profiles`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    Object.entries(data).forEach(profile => {
        let main = document.createElement('main');
        main.id = 'main';

        main.innerHTML = `

        <div class="profile">
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user1Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user1Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${profile.username}" disabled readonly />
            <div class="user1Username">
                <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user1Age" value="" disabled readonly />
            </div>
            
            <button>Show more</button>
        </div>`
    })
}
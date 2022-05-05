function lockedProfile() {

    let url = 'http://localhost:3030/jsonstore/advanced/profiles'
    fetch(url).then(response => response.json()).then(data => {
        console.log(data);
        Object.entries(data).forEach((data, index) => {
            console.log(data[1]);
            let main = document.getElementById('main')
            let divClass = e('div')
            divClass.classList = 'profile'
            let img = e('img', { src: './iconProfile2.png' })
            img.classList = 'userIcon'
            divClass.appendChild(img)
            let labelLock = e('label')
            labelLock.textContent = 'Lock'
            divClass.appendChild(labelLock)

            let input1 = e('input', { type: 'radio', value: 'lock', name: "user1Locked" + index })
            input1.checked = true

            divClass.appendChild(input1)
            let labelUnlock = e('label')
            labelUnlock.textContent = 'Unlock'
            divClass.appendChild(labelUnlock)
            let input2 = e('input', { type: 'radio', value: 'unlock', name: "user1Locked" + index })

            divClass.appendChild(input2)
            let hr = e('hr')
            divClass.appendChild(hr)

            let labelUsername = e('label')
            labelUsername.textContent = 'Username'
            divClass.appendChild(labelUsername)
            let inputUsername = e('input', { type: 'text', value: data[1].username })
            inputUsername.disabled = 'readonly'
            divClass.appendChild(inputUsername)


            let divC = e('div', { id: user1HiddenFields })
            let hr2 = e('hr')
            divC.appendChild(hr2)

            let labelEmail = e('label')
            labelEmail.textContent = 'Email:'
            divC.appendChild(labelEmail)
            let inputEmail = e('input', { type: 'email', value: data[1].email })
            inputEmail.disabled = 'readonly'
            divC.appendChild(inputEmail)

            let labelAge = e('label')
            labelAge.textContent = 'Age:'
            divC.appendChild(labelAge)

            let inputAge = e('input', { type: 'email', value: data[1].age })
            inputAge.disabled = 'readonly'
            divC.appendChild(inputAge)

            divC.style.display = 'none'
            divClass.appendChild(divC)

            let buttonSM = e('button')
            let buttonHide = e('button')
            buttonHide.textContent = 'Hide it'
            buttonHide.addEventListener('click', hideInfo)
            divClass.appendChild(buttonHide)
            buttonHide.style.display = 'none'
            buttonSM.textContent = 'Show more';
            buttonSM.addEventListener('click', showMore)
            divClass.appendChild(buttonSM)
            main.appendChild(divClass)

            function hideInfo(ev) {
                if (input2.checked && !input1.checked) {
                    divC.style.display = 'none'
                    buttonSM.style.display = 'block'
                    buttonHide.style.display = 'none'
                }
            }
            function showMore(ev) {
                if (input2.checked && !input1.checked) {
                    divC.style.display = 'block'
                    buttonSM.style.display = 'none'
                    buttonHide.style.display = 'block'
                }

            }

        })
    })
    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}
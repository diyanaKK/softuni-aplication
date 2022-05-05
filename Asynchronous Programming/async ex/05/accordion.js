function solution() {
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list'
    fetch(url).then(response => response.json()).then(data => {
        data.forEach(element => {
            let section = document.getElementById('main')
            let divClass = e('div');

            divClass.classList = 'accordion';
            let divHead = e('div');
            divHead.classList = 'head';

            let spanTitle = e('span')
            spanTitle.textContent = element.title
            divHead.appendChild(spanTitle)

            let button = e('button', { id: element._id })
            button.classList = 'button';
            button.textContent = 'More'
            button.addEventListener('click', toggleContent)
            divHead.appendChild(button)

            divClass.appendChild(divHead)
            let divEx = e('div')
            divEx.classList.add('extra')
            let url2 = 'http://localhost:3030/jsonstore/advanced/articles/details/'
            let id = element._id
            fetch(url2 + id).then(response => response.json()).then(data => {
                let p = e('p')
                p.textContent = data.content
                divEx.appendChild(p)
                divClass.appendChild(divEx)
                section.appendChild(divClass)
            })
            function toggleContent(ev) {
                // const divEx = ev.currentTarget.parentElement.parentElement.querySelector('.extra');
                const text = ev.target.textContent
    
                if (text === 'Less') {
                    divEx.style.display = 'none'
                    ev.target.textContent = 'More'
                } else {
                    divEx.style.display = 'block'
                    ev.target.textContent = 'Less'
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
solution()
function attachEvents() {
    let buttonLoad = document.getElementById('btnLoadPosts')
    buttonLoad.addEventListener('click', loadPosts)
    let buttomView = document.getElementById('btnViewPost')
    
    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts'
let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments/'
    function loadPosts(ev) {
        fetch(postsUrl).then(response => response.json()).then(data => {
            Object.entries(data).forEach(element => {
                console.log(element);
                let section = document.getElementById('posts')
                let option = document.createElement('option')
                option.textContent = element[1].title
                option.value = element[0]
                section.appendChild(option)

                buttomView.addEventListener('click',viewPost)

                function viewPost(ev){
                    fetch(commentsUrl+option.value).then(response =>response.json()).then(data =>{
                        console.log(data);
                    })
                }
            })
        })
        
    }

    


    


    
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

attachEvents();
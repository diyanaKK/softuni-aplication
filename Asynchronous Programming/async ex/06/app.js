function attachEvents() {
    let buttonLoad = document.getElementById('btnLoadPosts')
    buttonLoad.addEventListener('click', loadPosts)
    let buttomView = document.getElementById('btnViewPost')
    buttomView.addEventListener('click', displayPost)
}
attachEvents();

async function loadPosts(ev) {
    let postUrl = 'http://localhost:3030/jsonstore/blog/posts'

    const response = await fetch(postUrl)
    const data = await response.json()

    const select = document.getElementById('posts')
    Object.values(data).map(createOption).forEach(o => select.appendChild(o))

}
function createOption(post) {
    const result = document.createElement('option');
    result.textContent = post.title
    result.value = post.id
    return result
}



function displayPost() {
    const postId = document.getElementById('posts').value
    getComments(postId)
}

async function getComments(postId) {
    const commentsUl = document.getElementById('post-comments')
    commentsUl.innerHTML = ' '
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts/' + postId
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments/`

    const [postResponse, commentsResponse] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ])

    const postData = await postResponse.json()

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;



    const commentsData = await commentsResponse.json()
    const comments = Object.values(commentsData).filter(c => postId == postId)


    comments.map(createCom).forEach(c => commentsUl.appendChild(c));


}

function createCom(comment) {
    const result = document.createElement('li')
    result.textContent = comment.text
    result.id = comment.id
    return result
}





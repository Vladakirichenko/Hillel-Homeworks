const url = 'https://jsonplaceholder.typicode.com/posts/'
const btn = document.getElementById('btn')
const commentArea = document.getElementById('commentArea')
let btnComment;

const arrayShow = array => {
    array.forEach(item => {
        commentArea.innerHTML += `
            <div class="comment"> PostId: ${item.postId}</div>
            <div class="comment">ID : ${item.id}</div>
            <div class="comment">Name : ${item.name}</div>
            <div class="comment">email: ${item.email}</div>
            <div class="comment">BODY: ${item.body}</div>
         `
    });
}

const createTamplate = data => {
    return `
        <div calss ="wrapper-post" data-id = "${data.id}">
            <div> UserID : ${data.userId} </div>
            <div> ID : ${data.id} </div>
            <div> Title : ${data.title} </div>
            <div> Body : ${data.body} </div>
            <button id ="comments-btn" >Comments</button>
        </div>
    ` 
}

const showPost = (url) => {
    const postArea = document.getElementById('postArea')
    const numId = document.getElementById('input-id').value
    if (numId < 1 || numId > 100) {
        alert ('Такого поста не существует')
        postArea.innerHTML = ''
    } else {
        return fetch(url + numId)
        .then(response => response.json())
        .then(res => postArea.innerHTML = createTamplate (res))
        .then(() => {
            btnComment = document.getElementById('comments-btn')
            btnComment.addEventListener('click', (e) => {
                commentArea.innerHTML = ''
                fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.parentNode.dataset.id}/comments`)
                    .then(res => res.json())
                    .then(res => arrayShow(res))
            })
        })
    }
}

btn.addEventListener('click', () => {
    commentArea.innerHTML = ''
    showPost(url)
})
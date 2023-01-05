// task 1

const input = document.getElementById('input')
const div = document.getElementById('div')

const showInfo = () => {
    const info = document.createElement('div')
    info.className = 'info'
    info.innerHTML = 'Some info about input'
    div.appendChild(info)
}

const unShowInfo = () => {
    const infoElem = document.getElementsByClassName('info')[0]
    infoElem.remove()
}

input.addEventListener('mouseover', showInfo)
input.addEventListener('mouseleave', unShowInfo)


// task 2

const getLinkBtn = document.getElementById('btn-first')
const followLinkBtn = document.getElementById('btn-second')

const getUrl = () => {  
    link = prompt('input link')
} 

const followLink = () => {
    if (link.includes('http://') || link.includes('https://') ) {
        document.location.assign(link)
    } else {
        document.location.assign('https://' + link)
    }  
}


getLinkBtn.addEventListener('click', getUrl)
followLinkBtn.addEventListener('click', followLink)


// task 3

const frame = document.getElementsByClassName('wrapper-img')[0]
const randNum = () => Math.floor(Math.random() * 9) + 1; 
const img = document.createElement('img')

img.setAttribute('src', `img/${randNum()}.jpg`)
frame.appendChild(img)

const widthField = document.querySelector('#width')
const heightField = document.querySelector('#height')
const btn = document.querySelector('#button')
const resultBlock = document.querySelector('#result')

function getData(width, height, callback) {

    url = ` https://picsum.photos/${width}/${height}/`
    
    fetch(url)
        .then((response) => {
            const result = response.url
            return result
        })
        .then((data) => {
            displayData(data)
        })
        .catch(() => {
            console.log("error")
        })
}

function displayData(data) {
    const card = `
        <div class="card">
            <br/>
            <img src="${data}" width=600px/>
        </div>
    `
    resultBlock.innerHTML = card
}

btn.addEventListener('click', () => {
    if (widthField.value > 100 && widthField.value < 300 && heightField.value > 100 && heightField.value < 300) {
        getData(widthField.value, heightField.value)
    } else {
        resultBlock.innerHTML = `<h2>out of range</h2>`
    }
})

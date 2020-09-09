const field = document.querySelector('#qty')
const btn = document.querySelector('#button')
const resultBlock = document.querySelector('#result')

function getData(limit, callback) {
    let xhr = new XMLHttpRequest()
    url = 'https://picsum.photos/v2/list?limit=' + limit
    
    xhr.open("get", url, true)

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(xhr.status)
        } else {
            const result = JSON.parse(xhr.response)
            console.log(result)
            if (callback) {
                callback(result)
            }
        }
    }
      
    xhr.onerror = function() {
        console.log('Ошибка запроса')
    }
    
    xhr.send()
}

function displayData(data) {
    let cards = ''
    data.forEach(item => {
        const card = `
            <div class="card">
                <img src="${item.download_url}" width=600px/>
                <p>${item.author}</p>
                <br/>
            </div>
        `
        cards = cards + card
    })
    resultBlock.innerHTML = cards
}

btn.addEventListener('click', () => {
    if (field.value < 1 || field.value > 10 || field.value === null) {
        console.log('out of range')
    } else {
        getData(field.value, displayData)
    }
})
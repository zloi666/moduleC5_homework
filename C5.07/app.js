const pageField = document.querySelector('#page')
const limitField = document.querySelector('#limit')
const btn = document.querySelector('#button')
const resultBlock = document.querySelector('#result')


function getData(page, limit, callback) {

    url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    
    console.log(url)
    
    fetch(url)
        .then(async (response) => {
            const result = await response.json()
            console.log(result)
            return result
        })
        .then((data) => {
            displayData(data)
            localStorage.setItem("prevResult", JSON.stringify(data))
        })
        .catch(() => {
            console.log("error")
        })
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
    const val1 = Number(pageField.value)
    const val2 = Number(limitField.value)
    let flag1 = null
    let flag2 = null
    if (val1 < 1 || val1 > 10 || pageField.value === null || isNaN(val1)){
        resultBlock.innerHTML = "Номер страницы вне диапазона от 1 до 10"
        flag1 = false
    } else {
        flag1 = true
    }
    
    if (val2 < 1 || val2 > 10 || limitField.value === null || isNaN(val2)) {
        resultBlock.innerHTML = "Лимит вне диапазона от 1 до 10"
        flag2 = false
    } else {
        flag2 = true
    }
    
    if (!(flag1) && !(flag2)) {
        resultBlock.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10"
    } else if (flag1 && flag2){
        resultBlock.innerHTML = "<p>Query result:</p>"
        getData(val1, val2)
        

    }

})

window.onload = function() {
    const data = localStorage.getItem("prevResult")
    if (data) {
        console.log("using old data")
        const d = JSON.parse(data)
        displayData(JSON.parse(data))
        
    }
}


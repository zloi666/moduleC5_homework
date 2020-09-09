const jsonstring = `
    {
        "list": [
            {"name": "Petr", "age": "20", "prof": "mechanic" },
            {"name": "Vova", "age": "60", "prof": "pilot" }
        ]
   }
`

const data = JSON.parse(jsonstring)

const list = []

for ( var index = 0; index < data.list.length; index++) {
    const nameres = data.list[index].name
    const ageres = data.list[index].age
    const profres = data.list[index].prof

    const result = {
        name: nameres,
        age: ageres,
        prof: profres,
    }

    list.push(result)
}

const resultobject = {
    list: list 
}

console.log(resultobject)
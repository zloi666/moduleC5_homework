const parser = new DOMParser()

const xmlstring = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`

const xmlDOM = parser.parseFromString(xmlstring, "text/xml")


const listnode = xmlDOM.querySelector("list")
const list = []

for ( var index = 0; index < listnode.children.length; index++) {
    const child = listnode.children[index]
    const nameres = child.querySelector("name").querySelector("first").textContent + " " + child.querySelector("name").querySelector("second").textContent
    const ageres = child.querySelector("age").textContent
    const profres = child.querySelector("prof").textContent
    const langres = child.querySelector("name").getAttribute("lang")

    const result = {
        name: nameres,
        age: ageres,
        prof: profres,
        lang: langres
    }

    list.push(result)
}

const resultobject = {
    list: list
}
console.log(resultobject)

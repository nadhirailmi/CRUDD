let id = null
const makeVariable = (id)=>{
    eval(`const ${id} = document.querySelector('#${id}')`)
}
const input = (id, type="text")=>{
    return `
        <input id="${id}" type="${type}">
    `
    makeVariable(id)
}
const button = (id, label)=>{
    return`
        <button id="${id}">${label}</button>
    `
    makeVariable(id)
}
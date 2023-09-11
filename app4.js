"use strict";

let data = {
    "Vegetables":{
        "cucumbers": 5,
        "tomatoes": 3
    },
    "Fruits": {
        "red": {
            "strawberry": 2,
            "raspberry": 4
        },
        "green": {
            "apple": 6,
            "lime": 2

        }
    }
}

function createUl(obj) {
    if(!Object.keys(obj).length)
        return
    let ul = document.createElement('ul')
    for(let key in obj){
        let li = document.createElement('li')
        if(!isNaN(obj[key]))
            li.textContent = key +' '+ obj[key]
        else
            li.textContent = key
        let childrenUl = createUl(obj[key])
        if(childrenUl){
            li.append(childrenUl)
        }
        ul.append(li)
    }
    return ul
}
function createTree(container, obj) {
    document.querySelector(container).append(createUl(obj))
    
}
createTree('body', data)
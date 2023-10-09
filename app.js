const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')

function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}
function dragend(event){
    event.target.classList.remove('hold', 'hide')
}

for(const item of items){
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
}

const dragover = (event) => {
    event.preventDefault()
}

const dragenter = (event) => {
    event.target.classList.add('hovered')
}
const dragleave = (event) => {
    event.target.classList.remove('hovered')
}
const dragdrop = (event) => {
    let tempItem;
    for(const item of items){
        if(item.classList.contains('hold')){
            tempItem = item;
        }
    }
    if(event.target.classList.contains('item')){
        event.target.parentElement.append(tempItem)
        //event.target.append(tempItem)
    }else{
        event.target.append(tempItem)
    }
    console.log(event.target.classList)
    event.target.classList.remove('hovered')
}

for(placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}
function AddTask(){
    data = document.querySelector('input').value
    li = document.createElement('li')
    li_text = document.createTextNode(data)
    li.appendChild(li_text)
    document.querySelector('ul').appendChild(li)
}
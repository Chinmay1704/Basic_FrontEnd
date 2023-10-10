function addBook(){
    var book = document.querySelector('#book').value
    var author = document.querySelector('#author').value
    var pages = document.querySelector('#pages').value

    var line = `${book} by ${author} (${pages} pages)`

    document.querySelector('h2').innerText = 'Books in Library'

    li = document.createElement('li')
    li_text = document.createTextNode(line)
    li.appendChild(li_text)

    delete_button = document.createElement('button')
    delete_button.setAttribute('id','delete')
    delete_button.setAttribute('class','btn btn-danger')
    delete_button.style = "margin: 10px;"
    del_btn_text = document.createTextNode('x')
    delete_button.appendChild(del_btn_text)
    delete_button.setAttribute('onclick','delete_task(this)')
    li.appendChild(delete_button)

    
    document.querySelector('.result ul').appendChild(li)
    document.querySelector('#book').value=''
    document.querySelector('#author').value=''
    document.querySelector('#pages').value=''
    
}

function delete_task(element){
    element.parentNode.remove()
}
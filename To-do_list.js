let input = document.getElementById("input")
let addbutton = document.getElementById("addbutton")
let lists = document.getElementById("lists")
let resetbutton = document.getElementById("resetbutton")
let list_array = []
window.onload = () => {
    list_array = JSON.parse(localStorage.getItem('list_array')) || []
    list_array.forEach(element => listdata(element));

}

// add lists
addbutton.addEventListener('click', () => {
    const originalColor = addbutton.style.backgroundColor;

    // Change the color
    addbutton.style.backgroundColor = 'red';

    // Revert to the original color after 1 second
    setTimeout(() => {
        addbutton.style.backgroundColor = originalColor;
    }, 50);
    //inputs add
    listdata(input.value)
    input.value = ''
})

function listdata(inputs) {
    if (inputs != '') {
        list_array.push(inputs)
        localStorage.setItem('list_array', JSON.stringify(list_array))
        var para = document.createElement('li')
        para.innerText = inputs
        lists.appendChild(para)

        // one click on list
        para.addEventListener('click', () => {
            para.style.textDecoration = 'line-through'
            remove(inputs)
        })
        //double click
        para.addEventListener('dblclick', () => {
            lists.removeChild(para)
            remove(inputs)
        })

    }
}

// remove list
function remove(para) {
    let index = list_array.indexOf(para)
    if (index > -1) {
        list_array.splice(index, 1)

    }
    localStorage.clear()
    localStorage.setItem('list_array', JSON.stringify(list_array))

}
resetbutton.addEventListener('click', () => {
    const originalColor = resetbutton.style.backgroundColor;

    // Change the color
    resetbutton.style.backgroundColor = 'red';

    // Revert to the original color after 1 second
    setTimeout(() => {
        resetbutton.style.backgroundColor = originalColor;
    }, 50);

    localStorage.clear()
    list_array = []
    lists.innerHTML = ''
    input.value = ''
});





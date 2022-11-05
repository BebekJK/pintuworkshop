const form = document.querySelector('form');
const list = document.querySelector('ol');
const reset = form.querySelector('button:nth-of-type(2)');

reset.addEventListener('click' , () => {
    while(list.hasChildNodes){
        list.removeChild(list.firstChild);
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputForm = e.target[0];

    const newLi = document.createElement('li');
    newLi.innerText = inputForm.value;
    if(inputForm.value === "")return;
    list.append(newLi);
    inputForm.value = "";
})


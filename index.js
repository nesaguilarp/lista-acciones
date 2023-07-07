const btn = document.querySelector(`[data-form-btn]`);
const createtask = (evento) =>{
    evento.preventDefault()
    const input = document.querySelector(`[data-form-input]`)
    console.log(input.value);
    const task = document.querySelector(`[data-task]`)
    input.value = ``;
    console.log(task);
}
console.log(btn);

btn.addEventListener(`click`, createtask);
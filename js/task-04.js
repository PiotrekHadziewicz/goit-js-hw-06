const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
decrementBtn.addEventListener("click", ()=> {
    const span = document.querySelector("#value");
    counterValue -= 1;
    span.textContent = counterValue;
});
incrementBtn.addEventListener("click", ()=> {
    const span = document.querySelector("#value");
    counterValue += 1;
    span.textContent = counterValue;
});

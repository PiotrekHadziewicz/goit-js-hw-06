const input = document.querySelector("#font-size-control");
input.addEventListener("input", () => {
    const span = document.querySelector("#text");
    span.style.fontSize = input.value + "px";
});
const input = document.querySelector('input[data-length="6"]');
input.addEventListener("blur", () => {
    if (input.value.length === parseInt(input.dataset.length)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
});
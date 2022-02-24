const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll("input");
    let counter = 0;
    for (const input of inputs) {
        if (input.value === "") {
            counter += 1;
        }
    }
    if (counter === 0) {
        const login = {};
        login.email = form.elements.namedItem("email").value;
        login.password = form.elements.namedItem("password").value;
        console.log(login);
        form.reset();
    }
    else {
        alert("WSZYSTKIE POLA POWINNY BYĆ WYPEŁNIONE!!!");
    }
});
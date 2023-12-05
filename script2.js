document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://strizhevskiy.github.io/html/contact.html", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        const data = {
            name: name,
            email: email,
            message: message
        };

        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("Form submitted successfully!");
                form.reset();
            }
        };
    });
});

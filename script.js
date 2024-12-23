const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;

    if (name === "" || email === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Пожалуйста, введите корректный адрес электронной почты.");
        return;
    }
 
    function validateForm(event) {
        event.preventDefault(); 
        const phoneInput = document.getElementById('telephone');
        const phoneValue = phoneInput.value;

        const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        if (!phoneValue.match(phonePattern)) {
            alert('Введите номер телефона в формате: +7 (999) 999-99-99');
            return;
        }
    }

    successMessage.style.display = "block";
    alert("Форма успешно отправлена!");

    
    setTimeout(() => {
        modal.style.display = "none";
        successMessage.style.display = "none";
        form.reset();
    }, 1000);
}
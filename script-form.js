const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    printData: function() {
        console.log(`Имя: ${this.name} E-mail: ${this.email} Телефон: ${this.phone} Дата: ${this.date} Комментарий: ${this.comment}`);
    }
};

const modal = document.getElementById('myModal');
const authLink = document.getElementById('authLink');
const closeBtn = document.getElementsByClassName('close')[0];
const successMessage = document.getElementById("successMessage");

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const comment = document.getElementById('comment').value.trim();

    if (!name || !email || !comment) {
        alert('Поля имя, e-mail и комментарий не должны быть пустыми.');
                return;
            }

            const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/; 
            if (!phone.match(phoneRegex)) {
                alert('Введите номер телефона в формате: +7 (999) 999-99-99');
                return;
            }

            const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; 
            if (!emailRegex.test(email)) {
                alert('Введите корректный e-mail.');
                return;
            }

            formData.name = name;
            formData.email = email;
            formData.phone = phone;
            formData.date = date;
            formData.comment = comment;

            formData.printData();

            successMessage.style.display = "block";
            alert("Форма успешно отправлена!");
            
            closeModal();
        }

        authLink.addEventListener('click', function(event) {
            event.preventDefault();
            openModal(); 
        });

        closeBtn.addEventListener('click', closeModal);

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.getElementById('myForm').addEventListener('submit', submitForm);
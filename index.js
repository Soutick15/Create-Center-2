document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        if (validateForm()) {
            console.log('Form is valid');

            const formData = new FormData(form);
            console.log(Object.fromEntries(formData));
        } else {
            console.log('Form is invalid');
        }
    });


    function validateForm() {
        let isValid = true;
        const inputs = document.querySelectorAll('.userInp');
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    }
});

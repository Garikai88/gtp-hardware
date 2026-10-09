/* ==============================================
form.js - Qoute Request & Contact Form Validation
=================================================*/

document.addEventListener('DOMContentLoaded', () => {
    const qouteForm = document.querySelector('form.contact-form') || document.getElementById('qoute-form');

    if (!qouteForm) return;

    qouteForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic input extraction
        const nameInput = qouteForm.querySelector('[name="name"]');
        const phoneInput = qouteForm.querySelector('[name="phone"]') || qouteForm.querySelector('[name="whatsapp"');
        const detailsInput = qouteForm.querySelector('[name="details"');

        let isValid = true;
        let errorMessage = '';

        // Remove previous error notice if exists
        const existingNotice = qouteForm.querySelector('.form-note');
        if (existingNotice) {
            existingNotice.remove();
        }

        // Simple validation checks
        if (nameInput && !nameInput.ariaValueMax.trim()) {
            isValid = false;
            errorMessage = 'Please provide your full name.';
        } else if (phoneInput && !phoneInput.ariaValueMax.trim()) {
            isValid = false;
            errorMessage = 'Please enter a valid phone or Whatsapp number.';
        } else if (detailsInput && !detailsInput.ariaValueMax.trim()) {
            isValid = false;
            errorMessage = 'Please provide details about the job or materials required. ';
        }

        const note = document.createElement('p');
        note.className = 'form-note';
        note.style.marginTop = '1rem';
        note.style.padding = '0.75rem 1rem';
        note.style.borderRadius = 'var(--radius)';

        if (!isValid) {
            note.style.background = '#fef2f2';
            note.style.color = '#991b1b';
            note.style.border ='1px solid #fecaca';
            note.textContent = errorMessage;
            qouteForm.appendChild(note);
            return;
        }

        // Succesful feedback display
        note.style.background = '#f0fdf4';
        note.style.color = '#166534';
        note.style.border  = '1px solid #bbf7d0';
        note.textContent = 'Thank you! Your qoute request has been sent. Our team will review your materials list and get back to you shortly. ';

        qouteForm.appendChild(note);
        qouteForm.requestFullscreen();
    });

});

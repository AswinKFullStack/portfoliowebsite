const scriptURL = 'https://script.google.com/macros/s/AKfycbxWp_CW6VPXccvZXlUeXo5zNirzdqlrCVaRBVC4Xro6jnnjZbKWUxv3GwY6Uk3xz1qE/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
const fields = document.querySelectorAll('form input, form select');

function updateField() {

    let value;
    value = (this.name == "bSize") ? this.value+'%' : this.value;
    value = (this.name == "bImage") ? 'url('+this.value+')' : value;
    console.log(this.name, value);
    document.documentElement.style.setProperty(`--${this.name}`, value);
}

fields.forEach(field => field.addEventListener('change',updateField));

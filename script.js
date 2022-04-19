function submit() {
    var amount = document.getElementById('amount_input').value;
    const textfield = document.getElementById('amount_text');
    if (amount === '') {
        amount = 0;
        textfield.innerHTML = amount + 'x';
    }
    else if (amount < 0) {
        alert('Please enter a positive amount');
    }
    else {
        textfield.innerHTML = amount + 'x';
    }
}
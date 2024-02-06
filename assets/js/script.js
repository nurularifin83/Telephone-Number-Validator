const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkPhoneNumber = input => {

    if (userInput.value === '') {
        alert('Please provide a phone number');
        userInput.focus();
        return;
    }

    const phonenumberRegex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    const acceptNumber = [phonenumberRegex];
    const isValid = (msg) => acceptNumber.some((regex) => regex.test(msg)); 

    const createDiv = document.createElement('div');
    createDiv.className = 'alert';
    isValid(input) 
    ? 
    (createDiv.style.color = '#004085', 
    createDiv.style.backgroundColor = '#cce5ff',
    createDiv.style.borderColor = '#b8daff',
    createDiv.style.fontWeight = '800',
    createDiv.style.fontSize = '20px') 
    : 
    (createDiv.style.color = '#721c24', 
    createDiv.style.backgroundColor = '#f8d7da',
    createDiv.style.borderColor = '#f5c6cb',
    createDiv.style.fontWeight = '800',
    createDiv.style.fontSize = '20px');
    createDiv.appendChild(
        document.createTextNode(
            `${isValid(input) ? 'Valid' : 'Invalid'} US number: ${input}`
        )
    );
    resultsDiv.appendChild(createDiv);
};

checkBtn.addEventListener('click', e => {
    e.preventDefault();
    checkPhoneNumber(userInput.value);
    userInput.value = '';
    userInput.focus();
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkPhoneNumber(userInput.value);
        userInput.value = '';
        userInput.focus();
    }
})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resultsDiv.textContent = '';
    userInput.focus();
});
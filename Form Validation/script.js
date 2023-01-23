
// Avoid using so many const (it won't make any kind of problems, it is just beautiful :) )
const form = document.getElementById('form'),
      username = document.getElementById('username'),
      email = document.getElementById('email'),
      password = document.getElementById('password'),
      passwordTwo = document.getElementById('password2'),
      userNameMessage = document.getElementById('small'),
      small2 = document.getElementById('small2'),
      passwordMessage = document.getElementById('small3'),
      secondPasswordMessage = document.getElementById('small4')

form.addEventListener('submit', (e) => {
    e.preventDefault ();

    // UserName validation
    let message = 'Good username:)',
        color   = 'green';
    
    if (username.value === '' || username.value === null) {
        message = 'Username is required!'
        color = 'red'
        
    } else if (username.value.length <= 5) {
        message = 'It is not a valid Username!'
        color = 'red'

    }
    userNameMessage.innerHTML = message
    userNameMessage.style.color = color

    // Password validation
    message = 'Passwords match!';
    color = 'green';
    
    if (password.value.length <= 5 || null ) {
        message = 'Password must be longer than 6 charachters!'
        color = 'red' 
    }

     else if  (password.value.length > 5) {
        message = 'Password is strong enough:)';
        color = 'Green'

    }
    passwordMessage.innerHTML = message
    passwordMessage.style.color = color;
    
    // SecondPassword validation
    message = '';
    color = '';

    if (passwordTwo.value === password.value) {
        message = 'Passwords match!'
        color = 'green';

    } else if (passwordTwo.value != password.value) {
        message = 'Passwords do not match(:'
        color = 'red';

    }
    
    secondPasswordMessage.innerHTML = message;
    secondPasswordMessage.style.color = color;
});













